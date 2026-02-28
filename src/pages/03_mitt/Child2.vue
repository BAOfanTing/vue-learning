<template>
  <div class="child2">
    <h3>子组件2</h3>
	<h2>哥哥给弟弟的玩具{{ toy }}</h2>
	<button @click="sendToGege">给弟弟玩具</button>	
  </div>
</template>

<script setup lang="ts" name="Child2">
	import {ref,onUnmounted, onMounted} from 'vue'
	import emitter from '@/utils/emitter';
	let toy = ref('');
	//跟qt的信号槽机制差不多
	emitter.on('send-toy',(value)=>{
		console.log('子2 接收到 send-toy 事件：', value)
		toy.value = value as string;
	})

	onUnmounted(()=>{
		emitter.off('send-toy');
	})

	function sendToGege(){
		//发送事件,同时发送需要传递的参数
		emitter.emit('send-toy1','闪电库迪');
	}






</script>

<style scoped>
	.child2{
		margin-top: 50px;
		background-color: orange;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>