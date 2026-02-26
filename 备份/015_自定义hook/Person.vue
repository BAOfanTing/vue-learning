<template>

   <h1> {{ sum }}</h1>
   <button @click="increment">点我+1</button>
   <button @click="decrement">点我-1</button>
   <hr>
   <img v-for="(u,index) in dogList" :key="index" :src="u">
   <span v-show="isLoading.valueOf()">加载中...</span><br>
   <button @click="getDog">再来一只狗</button>


</template>


<script setup lang="ts" name="person">
import {ref} from 'vue'
import useSum from '../hooks/useSum'
import useDog from '../hooks/useDog'

let {sum,increment,decrement} = useSum();
let {dogList,getDog,isLoading} = useDog();



</script>
