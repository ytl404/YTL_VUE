# Vue使用

原生JS：命令式编程
Vue：声明式编程

在JS中 什么时候称之为 方法 什么时候称之为 函数
直接写称之为 函数
写在类里面 称之为方法   因为方法都是和某一个实例对象挂钩的

## 创建一个Vue应用

Vue分为两个重要的组成部分：视图、脚本
```js
Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统：
视图：
    <div id="app">
        {{ message }}
    </div>
1. 首先我们在页面上创建一个 id为app的div标签
2. 然后用 {{}} 的方式 声明了一个变量叫 message  这是vue常用的、声明文本插值的方式。

    

脚本：
<script>
    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    })
</script>
3. 用<script>标签写了一段js
4. 当我们引入Vue.js时 Vue会声明一个全局变量 Vue() 对象 通过new Vue() 会返回一个对象、称之为应用对象 
5. 在new Vue() 时 需要注意 要传递一个对象{}作为参数.
6. 这个{}有两个非常重要的属性 el  data
7. el 代表element 元素 通过id选择器 '#app' 来选中这个 HTML元素（也就是视图 的那个div）
8. data 用于保存数据 我们在视图中使用哪些变量 就需要在data中对他 进行初始化的赋值


```




## 数据与方法

每个 Vue 应用都是通过用 Vue 函数创建一个新的 Vue 实例开始的：
```js
var vm = new Vue({
  // 选项
})
```

当一个 Vue 实例被创建时，它将 data 对象中的所有的 property 加入到 Vue 的响应式系统中。当这些 property 的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。

想要数据起作用 就要在data中进行声明

唯一的例外是使用 Object.freeze()，这会阻止修改现有的 property，也意味着响应系统无法再追踪变化。

除了数据 property，Vue 实例还暴露了一些有用的实例 property 与方法。它们都有前缀 $，以便与用户定义的 property 区分开来。例如：
```js
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch 是一个实例方法
vm.$watch('a', function (newValue, oldValue) {
  // 这个回调将在 `vm.a` 改变后调用
})

```
- $watch 可以观察一个变量的变化 并且可以获取变量变化 变化之后的 和 变化之前  结果


## Vue的生命周期

事务从诞生到消亡的过程

每个 Vue 实例在被创建时都要经过一系列的初始化过程
例如，需要设置
  数据监听、
  编译模板、
  将实例挂载到 DOM 并在数据变化时更新 DOM 等。
同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。

生命周期要写在 new Vue({}) 对象中 以属性的方式来写

生命周期函数不能使用箭头函数

```js
在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
（整个页面创建之前调用的生命周期）
beforeCreate: function(){}

在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，property 和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el property 目前尚不可用。
（页面创建完成后）
created: function(){}


在挂载开始之前被调用：相关的 render 函数首次被调用。
该钩子在服务器端渲染期间不被调用。
beforeMount: function(){}



实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了。如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内。
mounted: function(){}
注意 mounted 不会保证所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以在 mounted 内部使用 vm.$nextTick：
mounted: function () {
  this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been rendered
  })
}
该钩子在服务器端渲染期间不被调用。


（数据变化之前）
数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
beforeUpdate: function(){}
该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。



由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。
updated: function(){}
注意 updated 不会保证所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以在 updated 里使用 vm.$nextTick：
updated: function () {
  this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been re-rendered
  })
}
该钩子在服务器端渲染期间不被调用。


================分割线===================================


被 keep-alive 缓存的组件激活时调用。
activated: function(){}
该钩子在服务器端渲染期间不被调用。



被 keep-alive 缓存的组件停用时调用。
deactivated: function(){}
该钩子在服务器端渲染期间不被调用。



实例销毁之前调用。在这一步，实例仍然完全可用。
beforeDestroy: function(){}
该钩子在服务器端渲染期间不被调用。



实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。
destroyed: function(){}
该钩子在服务器端渲染期间不被调用。

当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播。
errorCaptured: function(){} 2.5.0+ 新增
你可以在此钩子中修改组件的状态。因此在捕获错误时，在模板或渲染函数中有一个条件判断来绕过其它内容就很重要；不然该组件可能会进入一个无限的渲染循环。

```


## 模板语法

- 文本
数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：{{}}

一次性的插值、数据改变、插值内容不会更新 <span v-once>{{}}</span>

- 原始 HTML
双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 v-html 指令：
指令要 写在HTML标签上  并且要赋值
```js
<div id="app">
    <p v-html="rawHtml"> </p>
</div>

<script>
    var vm = new Vue({
        el: "#app",
        data: {
            rawHtml: '<span style="color:red">this is should be red </span>'
        }
    })
</script>
```

- v-bind 可以为HTML标签绑定一些它所具有的属性
语法是  v-bind:属性="data里变量"
<div v-bind:id="dynamicId"></div>

模板语法-指令
指令 attribute 的值预期是单个 JavaScript 表达式 (v-for 是例外情况)
指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。
- v-if
<p v-if="seen">现在你看到我了</p>

参数：
一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，v-bind 指令可以用于响应式地更新 HTML attribute：
<a v-bind:href="url">...</a>
<a v-on:click="doSomething">...</a>
- v-bind 可以为HTML标签绑定一些它所具有的属性
- v-on 用于监听 DOM 事件
  


修饰符：
是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。
.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：
<form v-on:submit.prevent="onSubmit">...</form>


## class与style绑定

我们可以传给 v-bind:class 一个对象，以动态地切换 class：
你可以在对象中传入更多字段来动态切换多个 class
v-bind:class 指令也可以与普通的 class attribute 共存
还支持数组形式[]  想要动态 可以用三元运算符


v-bind:style=""  可以绑定内联样式


## 条件渲染
v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。
- v-if
- v-else-if
- v-else
- v-show
另一个用于根据条件展示元素的选项是 v-show 指令
v-show 只是简单地切换元素的 CSS property display。

## 列表渲染
v-for 指令基于一个数组来渲染一个列表。v-for 指令需要使用 item in items 形式的特殊语法，其中 items 是源数据数组，而 item 则是被迭代的数组元素的别名。
- v-for
- v-for="(item,index) in item"  index索引
**需要为每个 提供一个 key 属性**
- :key=""


## 事件绑定

可以用 v-on 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码。
- v-on

然而许多事件处理逻辑会更为复杂，所以直接把 JavaScript 代码写在 v-on 指令中是不可行的。因此 v-on 还可以接收一个需要调用的方法名称。

在new Vue({})中 写 methods 属性 在 methods 中声明函数和函数体

还可以在 methods 中 调用 data 中的数据  this.数据

还可以传参数   实参、形参  与javascript

```js
var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

// 也可以用 JavaScript 直接调用方法
example2.greet() // => 'Hello Vue.js!'
```


有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 $event 把它传入方法：
```js
<button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
// ...
methods: {
  warn: function (message, event) {
    // 现在我们可以访问原生事件对象
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
}
```

事件修饰符:
在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

为了解决这个问题，Vue.js 为 v-on 提供了事件修饰符。之前提过，修饰符是由点开头的指令后缀来表示的。

.stop
.prevent
.capture
.self
.once
.passive

```js
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>

```


## 表单输入绑定
v-model 指令在表单 <input>、<textarea> 及 <select> 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。
- v-model


## 组件基础

- Vue.component('组件名称', {描述组件}) 创建组件
- <组件名称></ 组件名称>  使用组件
因为组件是可复用的 Vue 实例，所以它们与 new Vue 接收相同的选项，例如 data、computed、watch、methods 以及生命周期钩子等。仅有的例外是像 el 这样根实例特有的选项。

组件需要一个根节点、就是在外套一个<div>

## 组件注册

- Vue.component('组件名称', {描述组件})  全局注册
- 局部注册
在 new Vue({}) 中 创建 components:{} 属性  在内部进行局部注册
components:{
  test:{}
}

## 单文件组件

- .vue 文件

1. 安装 npm
2. 由于网络问题 安装 cnpm
   npm install -g cnpm --registry=https: //registry.npm.taobao.org
3. 安装 vue-cli
   cnpm install -g @vue/cli
4. 安装 webpack
   cnpm install -g webpack







## Vue中的MVVM
- 通常我们学习一个概念，最好的方式是去看维基百科（不是百度百科）
- https://zh.wikipedia.org/wiki/MVVM

Vue中的MVVM:

View   viewModel   Model
DOM     Vue         JS

View层：
  视图层
  前端中、通常就是DOM层
  主要作用就是给用户展示各种信息
ViewModel层：
  视图模型层
  视图模型层是View和Model沟通的桥梁
  一方面它实现了Data Binding，也就是数据绑定，将Model的改变实时的反应到View中
  另一方面它实现了DOM Listener，也就是DOM监听，当DOm发生一些事件(点击、滚动、touch等)时，可以监听到，并在需要的情况下改变对应的Data。
Model层：
  数据层
  数据可能是我们固定的死数据，更多的是来自我们服务器，从网络上请求下来的数据。
  在我们计数器的案例中，就是后面抽取出来的obj，当然，里面的数据可能没有这么简单。


## 总结

指令：
- v-once
- v-html="xxx"
- v-for="(item,index) in item"  :key="index"
- v-on:click="counter++"   @click="counter++"  methods: {fun}
- v-bind:src="xxx"   v-bind:属性   语法糖:src="xxx"   绑定class :class="{key: value,类名:值}"  {}里也可以选择写道methods里去   还可以写数组语法  :class="['xxx','xxx']"  绑定样式  :style="{key(属性名): value(属性值)}"

- // v-text="xxx" 一般不用
- // v-pre  把东西原封不动的显示  一般不用
- //v-cloak  加上这个属性  在Vue解析之前，就会存在这个属性  解析完之后就没有这个属性了  可以根据这个属性来控制元素


创建Vue实例传入的options
options都有哪些？ 
在Vue官网 API当中 详细

- el: 
   类型：string | HTMLElement
   作用：决定之后Vue实例会管理哪一个DOM
- data：
   类型：Object | Function
   作用：Vue实例对应的数据对象
- methods:
   类型：{ [key:string]: Function }
   作用：定义属于Vue的一些方法，可以在其他地方调用，也可以在指定指令中使用
- computed:
   类型：key:Function
   作用：可以写一些 属性组合  对于任何复杂逻辑，你都应当使用计算属性 逻辑不写在模板里面