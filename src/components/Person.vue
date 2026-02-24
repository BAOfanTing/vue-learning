<template>
    <h2> 情况4 监视对象类型数据的某个属性</h2>
    <div> name: {{ person.name }}</div>
    <div> age: {{ person.age }}</div>
    <button @click="changeName">改名</button>
    <button @click="changeAge">改年龄</button>
    <button @click="changeCar1">改车1</button>
    <button @click="changeCar2">改车2</button>
    <button @click="changeFullCar">改全量</button>
</template>


//计算属性会有缓存,而方法不会
<script setup lang="ts" name="person">
import { reactive, watch } from 'vue'

let person = reactive({
    name: '张三',
    age: 18,
    car:{
        car1: '奔驰',
        car2: '宝马'
    }

});

function changeName() {
    person.name += '!';
}

function changeAge(){
    person.age +=1;
}

function changeCar1(){
    person.car.car1 = '奥迪';
}

function changeCar2(){
    person.car.car2 = '大众';
}

function changeFullCar(){
    person.car = {
        car1: '奥迪',
        car2: '大众'
    }
}



//情况4 监视对象类型数据的某个属性,需要函数返回属性值
watch(()=>{return person.name},(newVal,oldVal)=>{
    console.log('name变化了',newVal,oldVal);
});

//情况4 监视对象类型的某个属性,是对象型,更推荐写函数返回属性值
watch(()=>person.car,(newVal,oldVal)=>{
    console.log('car1变化了',newVal,oldVal);
},{deep:true});



</script>
