# 组件化

## 组件使用分成三个步骤
1. 创建组件构造器  Vue.extend()
2. 注册组件  Vue.component()
3. 使用组件  在Vue实例的作用范围内使用组件


组件不能访问 Vue实例 里的数据的
组件里 不能访问 Vue实例里面的 data 他应该有自己的 保存数据的地方  data
在注册组件时  传入的  它是一个 function return {}Object




传递数据：
父组件向子组件传递  props
向父组件发送消息  通过自定义事件  $emit





父组件想调用子组件的方法
    $children
    $refs reference
子组件想调用父组件的方法
    $parent