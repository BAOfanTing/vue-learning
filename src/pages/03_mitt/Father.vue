<template>
  <div class="father">
    <h3>父组件</h3>
    <Child1/>
    <Child2/>
    <button @click="startAutoSend">自动发送事件</button>
    <button @click="stopAutoSend">停止自动发送</button>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child1 from './Child1.vue'
  import Child2 from './Child2.vue'
  import emitter from '@/utils/emitter'
  import {ref} from 'vue'

  let timer: number | null = null

  function startAutoSend() {
    if (timer) return
    timer = window.setInterval(() => {
      emitter.emit('abc', '自动发送的 hello')
      emitter.emit('xyz', '自动发送的 world')
    }, 1000)
    console.log('自动发送已启动')
  }

  function stopAutoSend() {
    if (timer) {
      clearInterval(timer)
      timer = null
      console.log('自动发送已停止')
    }
  }
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
    border-radius: 10px;
	}
  .father button{
    margin-left: 5px;
  }
</style>