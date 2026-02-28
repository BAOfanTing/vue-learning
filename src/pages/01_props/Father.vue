<template>
  <div class="father">
    <h3>父组件</h3>
	<h2>父亲的车是{{ car }}</h2>
	<h2>儿子给父亲的玩具{{toy}}</h2>
	<!--把需要传递的props传递给子组件-->
	<Child :car="car" :getToy = "getToy"></Child>
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue';
import {ref} from 'vue';
const car = ref('奔驰');
let toy = ref();

function getToy(value:string){
	toy.value = value;
}

</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>