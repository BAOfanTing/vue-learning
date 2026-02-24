<template>
    <h2> 情况三 监视reactive定义的对象</h2>
    <div> name: {{ person.name }}</div>
    <div> age: {{ person.age }}</div>
    <button @click="changeName">改名</button>
    <button @click="changeAge">改年龄</button>
    <button @click = "changeFull">改全量</button>
</template>


//计算属性会有缓存,而方法不会
<script setup lang="ts" name="person">
import { reactive, watch } from 'vue'

let person = reactive({
    name: '张三',
    age: 18
});

function changeName() {
    person.name += '!';
}

function changeAge(){
    person.age +=1;
}
function changeFull(){
    //这样只能算是person的赋值替换,地址没变
    Object.assign(person,{
        name: '李四',
        age: 20
    })
}

//情况三 监视reactive定义的对象,监视的对象的地址直接变化,若想监视对象内部属性的变化,默认开启deep:true
watch(person,(newVal,oldVal)=>{
    console.log('person变化了',newVal,oldVal);
});


</script>
