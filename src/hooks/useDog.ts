import {reactive,onMounted,ref} from 'vue'
import axios,{AxiosError} from 'axios'

export default function(){
    let dogList = reactive<string[]>([]);
    let isLoading = ref(true);
    //方法
    async function getDog(){
        try{
            isLoading.value = true;
            //发请求
            let {data} = await axios.get('https://dog.ceo/api/breed/pembroke/images/random');

            dogList.push(data.message);
            isLoading.value = false;
        }catch(error){
            console.log(error);
        }finally{
            console.log("finally");
        }
    }

    //挂载钩子
    onMounted(()=>{
        getDog();
    })

    return {dogList,getDog,isLoading}
}