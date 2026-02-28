<template>
  <div class="child">
    <h3>子组件</h3>
	<h2>儿子的玩具是{{toy}}</h2>
	<h2>父亲的车是{{car}}</h2>
	<button @click="send">给玩具</button>
	<button @click="handleClick($event)">点击</button>
  </div>
</template>

<script setup lang="ts" name="Child">
import {ref} from 'vue';

let toy = ref('巴斯光年');
//要定义在函数外，否则在函数中会报错，因为函数中没有this指向
const emit = defineEmits(['send-toy']);
function handleClick(event:any) {
  console.log(event) // MouseEvent 对象
  console.log(event.target) // 触发事件的元素
}
function send(){
	//发送事件,同时发送需要传递的参数
	emit('send-toy',toy);
}
//接受父组件的props
defineProps(['car']);
</script>

<style scoped>
	.child{
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
