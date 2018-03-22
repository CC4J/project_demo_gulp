# 使用手册
## 说明

通过gulp对webapp项目进行快速构建

## 作用

实现css，js，image文件压缩以及动态添加版本号功能。

## 开始

### 获取模板

[点我](https://github.com/CC4J/project_demo_gulp)可获取模板源码

### 目录结构

下载完成后目录结构如下
- dist
- src
- gulpfile.js
- package.json
- README.md

### 目录说明

- dist：存放生产环境代码，由gulp构建工具自动打包生成，无需我们在此编写任何代码。

- src：存放开发环境代码，我们在该目录下进行编码。

- gulpfile.js:构建工具gulp的配置文件（若只是单纯使用本模板无需理会该文件）

- package.json:模板配置信息（若只是单纯使用本模板无需理会该文件）

- README.md:模板使用手册

ps：使用该模板的方式是新建一个自己的项目如==myproject==，将dist，src，gulpfile.js，package.json拷贝到myproject文件夹下即可。

### 安装开发环境

本模板需要node开发环境，[点我](https://nodejs.org/en/)安装node。安装完成后打开系统命令行工具输入指令
`node -v`
检测node是否安装成功。若安装成功会显示==node版本号==。

### 安装模板依赖模块

node安装成功后，打开命令行工具，进入项目==myproject==路径下，输入指令`node install`，开始安装相关依赖模块。安装结束后检查项目中是否出现==node_modules==文件夹，若有则表明安装成功。

### 项目编码

以上步骤完成后即可开始在==src==路径下进行编码工作

### 项目打包

项目完成后，打开命令行工具，进入项目==myproject==路径下，输入指令`gulp`开始项目打包。打包结束后在==dist==目录下获取生产环境代码。之后版本更新，bug修改请修改==src==目录下代码，然后重复此步骤进行生产环境代码打包。

### 结束











