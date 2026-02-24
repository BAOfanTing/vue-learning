<template>
    <h2> 情况一 监视ref定义的对象</h2>
    <div> sum: {{ sum }}</div>
    <button @click="add">累加</button>
</template>


//计算属性会有缓存,而方法不会
<script setup lang="ts" name="person">
import { ref, watch } from 'vue'

let sum = ref(0);

function add() {
    sum.value++;
}
//情况一 监视ref定义的基本类型数据
const stopWatch = watch(sum, (newVal, oldVal) => {
    console.log(newVal, oldVal);
    if(newVal >= 5) {
        stopWatch();
    }
})



</script>
