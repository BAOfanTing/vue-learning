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
	<button @click="test1">测试一下在Vue2的配置中去读取Vue3中的数据、方法</button>
	<br>
	<br>
	<button @click="test2">测试一下在Vue3的setup配置中去读取Vue2中的数据、方法</button>

</template>

<script>
// import {h} from 'vue'
export default {
	name: 'App',
	//此处只是测试一下setup，暂时不考虑响应式的问题。
	setup() {
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

		//将函数,数据都返回,供模板使用
		// return { name, age, sex, a, sayHello, sayWelcome }

		//也可以返回函数
		return () => '哈哈';
	}
}
</script>
