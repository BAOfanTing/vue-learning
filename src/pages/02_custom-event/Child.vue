<template>
  <div class="child">
    <h3>子组件</h3>
	<h2>儿子的玩具是{{toy}}</h2>
	<h2>父亲的车是{{car}}</h2>
	<button @click="send">给玩具</button>
  </div>
</template>

<script setup lang="ts" name="Child">
import {ref,defineEmits} from 'vue';

let toy = ref('巴斯光年');

function send(){
	const emit = defineEmits(['send-toy']);
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
