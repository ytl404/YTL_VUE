# webpack 详解

webpack本质上，是一个现代的javaSript应用的静态模块打包工具。


webpack模块化打包
webpack为了可以正常运行，
必须依赖node环境
node环境为了可以正常的执行很多代码，必须其中包含各种依赖的包
npm工具(node packages manager)

## webpack的安装
```js
node -v 
查看自己的node版本

全局安装webpack（这里先指定版本号3.6.0，因为vue cli2 依赖该版本）
npm install webpack@3.6.0 -g


webpack --version
查看webpack的版本
```

## webpack 的基本目录
src：源码文件夹
dist：打包之后文件夹


开发都在src文件夹下开发

webpack的基本打包：
```webpack ./src/main.js  ./dist/bundle.js```
使用长久之后、你发现这种打包方式、有些繁琐、有些过于长
你就只想```webapck```写一个这个命令，就完成打包
这时你需要的就是配置文件、这里的重点就是：以./src/main.js 作为入口文件  打包到  ./dist/bundle.js 文件当中去

配置文件```webpack.config.js```
```js
module.exports = {
    entry: './src/main.js', // 入口
    output: {  // 出口
        path: 动态获取路径,
        filename: 'bundle.js' //文件名
    }
}
```
想要动态获取路径就需要依赖node的一个内置模块
```const path = require('path') ```
想要动用内置模块、就需要初始化node```npn init ```
初始化后就会生成一个```package.json```文件
假设```package.json```依赖另外一些东西的话、会敲另外一个命令 ```npm install```
```npm install```就是、帮助你安装```package.json```里依赖的一些东西的```package-lock.json```会创建一个这个文件
这时```webpack```命令，你发现好像也有些不方便，比如配置文件有多个、配置文件名不一样、单webpack命令就没用了所以，因为你是用npm管理包的，大部分都用npm命令，那么接下来的问题就是：把```webpack```命令和```npm run build```命令对应起来
要想对应起来打开package.json文件找到"scripts" {}脚本区域 写上 "build": "webpack" 这样```npm run build```这个命令就有用了、这样有一个优势、它优先找本地的webpack不优先全局webpack


## loader

webpack用来做什么呢？
- 在我们之前的实例中，我们主要是用webpack来处理我们写的js代码，并且webpack会自动处理js之间相关的依赖。
- 但是，在开发中我们不仅仅有基本的js代码处理，我们也需要加载css、图片，也包括一些高级的将ES6转成ES5代码，将TypeScript转成ES5代码，将scss、less转成css，将.jsx、.vue文件转成js文件等等。
- 对于webpack本身的能力来说，对于这些转化是不支持的。
- 那怎么办呢？给webpack扩展对应的loader就可以啦。
loader使用过程：
步骤一：通过npm安装需要使用的loader
步骤二：在webpack.config.js中的modules关键字下进行配置
大部分loader我们都可以在webpack的官网中找到，并且学习对应的用法。
**loader就像插件一样、具体是什么插件、什么loader还要看具体的情况是什么**

比如安装css loader:
```
命令：
npm install --save-dev css-loader  
配置：
webpack.config.js

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
```

比如安装less loader:
npm 安装
webpack.config.js 配置


### 图片文件处理：
安装```url-loader``` 和 ```file-loader```，记住 配置url-loader就行了、file-loader不要配置



### ES6 转 ES5  需要使用babel
babel也有对应的loader




### webpack 配置 Vue
安装：
npm install vue --save

使用：
```js
import Vue from 'vue'

new Vue({
    el: '#app',
    data: {
        message: 'Hello webpack'
    }
})

<div id="app">
    {{message}}
</div>

这时你运行会报错
```

Vue有两个版本:
runtime-only
runtime-compiler

你要使用runtime-compiler版，运行才能成功，这时你就需要配置：
```
module.exports = {
resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}
```


使用.vue文件：
按装：
npm install vue-loader vue-template-compiler --save-dev
配置：
{
    test: /\.vue$/,
    use: ['vue-loader']
}
vue-loader 会有一个问题  从14.0.0之后 要想使用vue-loader 你还必须给他配置一个插件
```vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.```报错信息
想要简写.vue后缀  配置:
resolve: {
  // alias: 别名
  extensions: ['.js', '.css', '.vue'],
  alias: {
      'vue$': 'vue/dist/vue.esm.js'
  }
}

Plugin 插件