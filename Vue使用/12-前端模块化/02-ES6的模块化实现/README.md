# 模块化

常见的模块化：
1. CommonJS
2. AMD
3. CMD
4. ES6的Modules

模块化的核心：
导入 和 导出
导入：是使用
导出：是给别人使用

## CommonJS导入、导出
CommonJS的导出:
```js
module.exports = {
    flag: true,
    a: a,
    test(a,b){
        return a + b
    }
}
```

CommonJS的导入:
```js
let {flag, a, test} = require('./aaa.js');

let aaa = require('./aaa.js)
使用：
let flag = aaa.flag

```

## ES6导入、导出
<script src="aaa.js" type="module"></script>

导出: export{flag, sum}
```js
// 1.导出方式一:
export {
  flag, sum
}

// 2.导出方式二:
export var num1 = 1000;
export var height = 1.88


// 3.导出函数/类
export function mul(num1, num2) {
  return num1 * num2
}

export class Person {
  run() {
    console.log('在奔跑');
  }
}

// 4. export default
// 某些情况下，一个模块中包含某个功能，我们并不希望给这个功能命名，而让导入者可以自己来命名
// const address = '北京市'
// export {
//   address
// }
// export const address = '北京市'
// const address = '北京市'
//
// export default address

export default function (argument) {
  console.log(argument);
}
```
导入: import {} from "./aaa.js"
```js
// 1.导入的{}中定义的变量
import {flag, sum} from "./aaa.js";

if (flag) {
  console.log('小明是天才, 哈哈哈');
  console.log(sum(20, 30));
}

// 2.直接导入export定义的变量
import {num1, height} from "./aaa.js";

console.log(num1);
console.log(height);

// 3.导入 export的function/class
import {mul, Person} from "./aaa.js";

console.log(mul(30, 50));

const p = new Person();
p.run()

// 4.导入 export default中的内容
import addr from "./aaa.js";

addr('你好啊');

// 5.统一全部导入
// import {flag, num, num1, height, Person, mul, sum} from "./aaa.js";

import * as aaa from './aaa.js'

console.log(aaa.flag);
console.log(aaa.height);
```

