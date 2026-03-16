<template>
  <div class="child1">
    <h3>哥哥</h3>
	<h2>弟弟给哥哥的玩具是{{gegetoy}}</h2>
	<button @click="send">给弟弟玩具</button>	
  </div>
</template>

<script setup lang="ts" name="Child1">
	import {ref,onUnmounted, onMounted} from 'vue'
	import emitter from '@/utils/emitter';
let gegetoy = ref('');
function send(){
	emitter.emit('send-toy','帅气的哥哥');
	console.log('子1 发送 send-toy 事件：', gegetoy.value)
}

emitter.on('send-toy-gege',(value:any)=>{
	gegetoy.value = value;
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