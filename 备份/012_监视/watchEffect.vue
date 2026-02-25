<template>
    <h2> 需求:水温到达10°,或水位到达10cm,联系服务器</h2>
    <h2 id="demo"> 水温: {{ temp }}</h2>
    <h2> 水位: {{ height }}</h2>
    <button @click="changePrice">水温+1</button>
    <button @click="changeHeight">水位+10</button>

</template>


//计算属性会有缓存,而方法不会
<script setup lang="ts" name="person">
import { ref, watch, watchEffect } from 'vue'

let temp = ref(0);
let height = ref(0);

function changePrice() {
    temp.value += 1;
}

function changeHeight() {
    height.value += 10;
}

//使用watch监视,需要指明监视的值,temp,height
// watch([temp, height], (newval, oldval) => {
//     const [newTemp, newHeight] = newval;
//     if (newTemp >= 10 || newHeight >= 50) {
//         console.log('水温或水位到达要求');
//     }
// })

//使用watchEffect实现,不用,在里边用到了哪些变量就会监视哪些变量
const stopWatch = watchEffect(()=>{
    if(temp.value >=10 || height.value >=50){
        console.log('水温或水位到达要求');
    }
    if(temp.value >=20 || height.value >=80){
        console.log('停止监视');
        stopWatch();
    }
})

</script>
