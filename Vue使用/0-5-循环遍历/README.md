# 循环遍历

## for 数组
for 在遍历过程中 没有使用 索引值
<li v-for="item in names">{{item}}</li>
for 在遍历过程中 使用 索引值
<li v-for="(item, index) in names">
## for 对象
for 在遍历过程中 没有使用 索引值     获取的是值
<li v-for="item in info">{{item}}</li>
for 在遍历过程中 使用 索引值
<li v-for="(value, key) in info">{{value}}-{{key}}</li>


## key值
key值要唯一
key值的作用是 在循环过程中 保证数据的唯一性

## in of
for(index in arr){}   
in 拿到的是  索引/第几个

for(item of arr){}
of  拿到的是  值
## 高阶函数

filter: 过滤
    filter中的回调函数有一个要求: 必须返回一个boolean值
    true: 当返回true时, 函数内部会自动将这次回调的n加入到新的数组中
    false: 当返回false时, 函数内部会过滤掉这次的n
map：映射
    map 返回数据  
    用map来操作数据
reduce：汇总
    reduce  俩个参数  
    用来汇总数据
