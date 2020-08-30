# 条件判断

## v-if  v-else v-else-if

写在HTML上的

写法：v-if=""

05-小问题：
使用key=""解决  key值不一样，Vue就不会直接从虚拟DOM中 来直接渲染两个一样的东西 

Vue的渲染机制就是  靠虚拟DOM来操作  这样渲染两个差不多的事物时 相当于是渲染一个虚拟DOM 然后再修改  并不会创建两个DOM

## v-if  VS v-show

v-if: 当条件为false时, 包含v-if指令的元素, 根本就不会存在dom中

v-show: 当条件为false时, v-show只是给我们的元素添加一个行内样式: display: none


v-show=""