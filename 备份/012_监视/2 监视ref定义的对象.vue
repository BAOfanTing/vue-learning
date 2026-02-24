<template>
    <h2> 情况二 监视ref定义的对象</h2>
    <div> name: {{ person.name }}</div>
    <div> age: {{ person.age }}</div>
    <button @click="changeName">改名</button>
    <button @click="changeAge">改年龄</button>
    <button @click = "changeFull">改全量</button>
</template>


//计算属性会有缓存,而方法不会
<script setup lang="ts" name="person">
import { ref, watch } from 'vue'

let person = ref({
    name: '张三',
    age: 18
});

function changeName() {
    person.value.name += '!';
}

function changeAge(){
    person.value.age +=1;
}
function changeFull(){
    person.value = { 
        name: '李四',
        age: 20
    }
}

//情况一 监视ref定义的对象,监视的对象的地址直接变化,若想监视对象内部属性的变化,需要deep:true
watch(person,(newVal,oldVal)=>{
    console.log('person变化了',newVal,oldVal);
},{deep:true});


</script>
