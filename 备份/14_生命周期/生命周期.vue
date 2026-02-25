<template>

   <h1> {{ sum }}</h1>
   <button @click="add">点我</button>

</template>


<script setup lang="ts" name="person">
import {ref,onBeforeMount,onMounted,onBeforeUnmount,onUnmounted,onBeforeUpdate,onUpdated} from 'vue'

let sum = ref(0);
function add(){
    sum.value++;
}

onBeforeMount(()=>{
    console.log("挂载前");
})
onMounted(()=>{
    console.log("挂在后");
})

onBeforeUnmount(()=>{
    console.log("卸载前");
})
onUnmounted(()=>{
    console.log("卸载后");
})
onBeforeUpdate(()=>{
    console.log("更新前");
})
onUpdated(()=>{
    console.log("更新后");
})



</script>
