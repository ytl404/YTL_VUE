// 编程范式: 命令式编程/声明式编程
// 编程范式: 面向对象编程(第一公民:对象)/函数式编程(第一公民:函数)
// filter/map/reduce

// filter中的回调函数有一个要求: 必须返回一个boolean值
// true: 当返回true时, 函数内部会自动将这次回调的n加入到新的数组中
// false: 当返回false时, 函数内部会过滤掉这次的n

const nums = [10, 200, 30, 400, 50];

// filter 过滤
// 1. filter函数的使用  需求: 取出所有小于100的数字
// 平常方法1
// const num = [];
// for (let i = 0; i < nums.length; i++) {
//     if( nums[i] < 100 ){
//         num.push(nums[i]);
//     }
// }
// console.log(num);
// 平常方法2  in 拿到的是第几个   也就是下标
// const num = [];
// for(index in nums){
//     // console.log(index)
//     if(nums[index] < 100 ){
//         num.push(nums[index]);
//     }
// }
// console.log(num);
// 平常方法3  of  item:直接拿到 值
// const num = [];
// for(item of nums){
//     // console.log(item);
//     if(item < 100){
//         num.push(item);
//     }
// }
// console.log(num)
// 高阶函数：filter  n: 直接拿到值
// let newNum = nums.filter(function(n){
//     // console.log(n);
//     return n < 100
// })
// console.log(newNum);

// 2.map函数的使用  需求:将所有小于100的数字进行转化: 全部*2
// console.log(nums);
// let newNum = nums.map(function(n){
//     // console.log(n);
//     return n * 2
// })
// console.log(newNum);

// 3.reduce函数的使用
// reduce作用对数组中所有的内容进行汇总
// let newNum = nums.reduce(function(preValue, n){
    
//     // console.log(preValue, n);
//     return preValue + n;
// },0)
// console.log(newNum);
// 10, 200, 30, 400, 50
// 第一次：0 10
// 第二次：10 200
// 第三次：210 30
// 第四次：240 400
// 第五次：640 50
// 690


// 需求: 取出所有小于100的数字，
// 将所有小于100的数字进行转化: 全部*2，
// 将所有new2Nums数字相加,得到最终的结果
// let num = nums.filter(function(n){
//     return n < 100;
// }).map(function(n){
//     return n * 2;
// }).reduce(function(preValue, n){
//     return preValue + n;
// },0)
// console.log(num);

// let num = nums.filter(n => {
//     return n < 100;
// }).map((n)=>{
//     return n * 2;
// }).reduce((preValue, n)=>{
//     return preValue + n;
// },0)
// console.log(num);

// let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
// console.log(total);