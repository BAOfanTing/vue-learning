import {defineStore} from 'pinia'

//定义并暴露一个store
export const useCountStore = defineStore('count',{
//有三个概念：state、getter、action，相当于组件中的： data、 computed 和 methods
    //动作
    actions:{},
    //状态
    state:()=>{
        return{
            sum:6
        }
    },
    //计算
    getters:{}
}
)
