import {ref,onMounted} from 'vue'

export default function(){
    let sum = ref(0);

    const increment =()=>{
        sum.value++;
    }
    const decrement=()=>{
        sum.value--;
    }
    onMounted(()=>{
        increment();
    })

    //向外部暴露数据
    return {sum,increment,decrement}
}