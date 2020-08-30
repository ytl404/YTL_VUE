# ES6

## let VS var
ES5中的var是没有块级作用域的(if/for)
ES6中的let是由块级作用的(if/for)

ES5之前因为if和for都没有块级作用域的概念, 所以在很多时候, 我们都必须借助于function的作用域来解决应用外面变量的问题.
ES6中,加入了let, let它是有if和for的块级作用域.

ES5 解决问题 通常靠一个立即执行函数来解决 因为函数有作用域 等于就是说借用函数的作用域来解决这种问题

1. 变量作用域
> var 没有块级作用域  也就是说  在任何地方都能访问到 var
> let 有块级作用域  也就是说  它只在作用域范围内 能访问到


没有作用域的坏处：
> 没有作用域  就代表着 外面能访问里面、里面能访问外面、在外面调用里面、在里面调用外面

## const

- 一旦给const修饰的标识符被赋值之后, 不能修改
- 在使用const定义标识符,必须进行赋值
- 常量的含义是指向的对象不能修改, 但是可以改变对象内部的属性.
```js
 const obj = {
    name: 'why',
    age: 18,
    height: 1.88
  }
  // obj = {}
  console.log(obj);

  obj.name = 'kobe';
  obj.age = 40;
  obj.height = 1.87;

  console.log(obj);
```

## 对象字面量的增强写法

- 原先 const obj = new Object() 这样创建对象
- const obj = {}  这是对象字面量

属性的增强写法：
```js
const name = 'why';
const age = 18;
const height = 1.88
// ES5
const obj = {
  name: name,
  age: age,
  height: height
}
这样写相当于 这样写
// ES6
const obj = {
  name,
  age,
  height,
}


```

函数的增强写法：
```js
// ES5
const obj = {
  a: function(){},
  b: function(){},
}
可以这样写
// ES6
const obj = {
  a(){},
  b(){},
}
```
