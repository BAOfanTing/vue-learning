<template>
  <div class="child1">
    <h3>子组件1</h3>
	<h2>弟弟给哥哥的玩具是{{toy}}</h2>
	<button @click="send">给弟弟玩具</button>	
  </div>
</template>

<script setup lang="ts" name="Child1">
	import {ref,onMounted,onUnmounted} from 'vue'
import emitter from '@/utils/emitter';
let toy = ref('');

function send(){
	//发送事件,同时发送需要传递的参数
	emitter.emit('send-toy','巴斯光年');
}

onMounted(()=>{
	emitter.on('send-toy1',(value)=>{
		console.log('子1 接收到 send-toy 事件：', value)
		toy.value = value as string;
	})
})
onUnmounted(()=>{
	emitter.off('send-toy');
	})
</script>

<style scoped>
	.child1{
		margin-top: 50px;
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
	.child1 button{
		margin-right: 10px;
	}
</style>