<template>

    

</template>


<script setup lang="ts" name="person">
import { ref } from 'vue'
import { type PersonInter,type Persons} from '@/types/index'

//是一种规范,输入错误会提示
let person:PersonInter = {
    id:'1001',
    name:'张三',
    age:18
}

//let personList:Array<PersonInter> 很多种写法
let personList:Persons = [
    {id:'1001',name:'张三',age:18},
    {id:'1002',name:'李四',age:19},
    {id:'1003',name:'王五',age:20}
]


</script>
