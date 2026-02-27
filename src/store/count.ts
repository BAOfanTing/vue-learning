import {defineStore} from 'pinia'
import {ref,computed} from 'vue'

//定义并暴露一个store
// export const useCountStore = defineStore('count',{
// //有三个概念：state、getter、action，相当于组件中的： data、 computed 和 methods
//     //动作
//     actions:{},
//     //状态
//     state:()=>{
//         return{
//             sum:6 
//         }
//     },
//     //计算
//     getters:{}
// }
// )

//vue3中使用pinia
export const useCountStore = defineStore('count',()=>{
    const sum = ref(6);

    const bigSum = computed(()=>{
        return sum.value * 10
    })

    function changeSum(){
        sum.value += 10
    }
    return{
        sum,
        bigSum,
        changeSum
    }
})
