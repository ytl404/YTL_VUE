# v-model

v-model 是和表单一起使用的

双向数据绑定：
```js
<input type="text" v-model="message">
{{message}}
data: {
    message: '你好啊'
}

不管是从  代码中改变 message
还是从  视图中改变 message
都会在页面中-显示新的message的值
```

v-model 其实是一个语法糖：
:  @  两个结合也可以使用出一样的效果
```js
<input type="text" :value="message">  
给input绑定他的value属性  这样数据就同步了  
现在只缺少了  视图改message message的值也改
<input type="text" :value="message" @input="message = $event.tarfet.value">  
或
<input type="text" :value="message" @input="valueChange">
methods: {
      valueChange(event) {
        this.message = event.target.value;
      }
    }
这里是监听 input的input事件  input事件：就是每输入都触发一次
浏览器有一个event事件  只要有事件触发  都会触发到这个事件
拿到里面  event.target.value  的值  这就是每次输入改变的值
把这个值  赋值给message  这样就产生同步了  双向数据绑定
```