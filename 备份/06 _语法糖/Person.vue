<template>
    <h1>一个人的信息</h1>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>性别：{{ sex }}</h2>
    <h2>a的值是：{{ a }}</h2>
    <button @click="sayHello">说话(Vue3所配置的——sayHello)</button>
    <br>
    <br>
    <button @click="sayWelcome">说话(Vue2所配置的——sayWelcome)</button>
    <br>
    <br>

</template>


//这个相当于是组件的名字
<!-- <script lang="ts">
export default {
    name: 'App',
    //此处只是测试一下setup，暂时不考虑响应式的问题。
}
</script> -->


//这种形式下就不用return
<script setup lang="ts">
//这样就不用多写一个export default
defineOptions({ name: 'Person' })
//数据,此时不是响应式的，只是普通的变量
let name = '张飒';
let age = 18;
let sex = '男';
let a = '13888888888'; a

//方法
function sayHello() {
    name = 'zhangsan';
}
function sayWelcome() {
    console.log('Vue2所配置的方法——sayWelcome');
    age += 1;
}

//也可以返回函数
// return () => '哈哈';
</script>
