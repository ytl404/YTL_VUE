# Vue cli

## 安装vue cli
- Webpack的全局安装
npm install webpack -g

- 安装Vue脚手架
npm install -g @vue/cli

- Vue CLI2初始化项目
vue init webpack my-project

- Vue CLI3初始化项目
vue create my-project

- 拉取 2.x 模板 (旧版本)
npm install -g @vue/cli-init
`vue init` 的运行效果将会跟 `vue-cli@2.x` 相同
vue init webpack my-project



## 懒加载：
就是将不同的组件、打包到不同的js文件里去，
因为默认是打包到一个js文件里，这样导致文件非常大，
请求资源时、显示哪个组件、就请求哪部分资源