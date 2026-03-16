<template>
  <div class="child2">
    <h3>弟弟</h3>
	<h2>哥哥给弟弟的玩具{{ toy }}</h2>
	<button @click="sendTogege">给哥哥玩具</button>	
  </div>
</template>

<script setup lang="ts" name="Child2">
	import {ref,onUnmounted, onMounted} from 'vue'
	import emitter from '@/utils/emitter';
	let toy = ref('');
	emitter.on('send-toy',(value:any)=>{
		console.log('子2 接收到 send-toy 事件：', value)
		toy.value = value;
	})
	onUnmounted(()=>{
		emitter.off('send-toy');
	})

function sendTogege(){
	emitter.emit('send-toy-gege','迷人的弟弟');
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