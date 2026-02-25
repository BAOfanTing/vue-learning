<template>

    <h1>
        <ul>
            <li v-for="item in list" :key="item.id">
                {{ item.name }}--{{ item.age }}
            </li>
        </ul>
    </h1>

</template>


<script setup lang="ts" name="person">
import { ref,defineProps,withDefaults} from 'vue'
import { type PersonInter,type Persons} from '@/types/index'

//直接收list
// defineProps(['list']);

//接受list+将限制类型
// defineProps<{list:Persons}>();

//接受list+将限制类型+限制必要性+默认值
withDefaults(defineProps<{list?:Persons}>(),{
    list:()=>[{id:'1001',name:'张三',age:18}]
})

// //接受ab,同时存起来
// let x = defineProps(['list']);
// console.log(x);

</script>
