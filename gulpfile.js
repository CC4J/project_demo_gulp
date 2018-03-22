var gulp = require('gulp');

var mincss = require('gulp-mini-css');//压缩css文件
var autoprefix = require('gulp-autoprefixer');//自动为css属性添加兼容前缀

var uglify = require('gulp-uglify');//压缩、混淆js文件用的

var imagemin = require('gulp-imagemin');//压缩图片

var del = require('del');

//为js与css添加版本号（若有改动会自动添加新的版本号，解决浏览器缓存问题）
var assetRev = require('gulp-asset-rev'); 
var runSequence = require('run-sequence');


//压缩css文件并自动添加浏览器兼容前缀
gulp.task('rev_styles',function(){
    gulp.src('./src/css/**/*.css')
        .pipe( autoprefix('last 2 versions') )
        .pipe( assetRev() ) //配置版本号
        .pipe( mincss() )
        .pipe( gulp.dest('./dist/css/') );
});

//压缩js文件输出到dist相应的目录下
gulp.task('rev_scripts',function(){
    gulp.src('./src/js/**/*.js')
        .pipe( assetRev() ) //配置版本号
        .pipe( uglify() )
        .pipe( gulp.dest('./dist/js/') );
});

//监听imgs文件并输入到dist对应目录
gulp.task('imgs',function(){
    gulp.src('./src/imgs/**/*.*')
        .pipe( 
                imagemin(
                    [
                        imagemin.gifsicle({interlaced: true}),
                        imagemin.jpegtran({progressive: true}),
                        imagemin.optipng({optimizationLevel: 5}),
                        imagemin.svgo({
                            plugins: [
                                {removeViewBox: true},
                                {cleanupIDs: false}
                            ]
                        })
                    ]
                )
            )
        .pipe( gulp.dest('./dist/imgs/') );
});

//监听fonts文件并输入到dist对应目录
gulp.task('fonts',function(){
    gulp.src('./src/fonts/**/*.*')
        .pipe( gulp.dest('./dist/fonts/') );
});

//将src中的html配置版本号后复制到dist目录下
gulp.task('rev_html',function(){
    gulp.src('./src/**/*.html')
        .pipe( assetRev() )//配置引用的js和css文件
        .pipe( gulp.dest('./dist/') )
});

//对css，js，html进行构建
gulp.task('app_rev',['rev_styles','rev_scripts'],function(){
    gulp.run('rev_html');
});

//清除dist目录下的所有文件
gulp.task('clean',del.bind(null,['./dist/'],{force:true}));


//创建项目构造任务
gulp.task('build',function(){
    runSequence(
        'clean',
        [
            'app_rev',
            'imgs',
            'fonts'
        ]
    );
});

//gulp默认任务
gulp.task('default',['build'],function(){});