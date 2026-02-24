<template>
    <div class="person">
        姓:<input type="text" v-model="firstname"> <br>
        名:<input type="text" v-model="lastname"> <br>
        全名 : <span>{{ fullname }}</span>
        全名 : <span>{{ fullname }}</span>
        全名 : <span>{{ fullname }}</span>
        <button @click="changeFullName">修改姓名</button>
    </div>

</template>


//计算属性会有缓存,而方法不会
<script setup lang="ts" name="person">
import { ref, computed } from 'vue'

let firstname = ref('zhang');
let lastname = ref('san');

function getFullname() {
    console.log(22);
    return firstname.value.slice(0, 1).toUpperCase() + firstname.value.slice(1) + lastname.value;
}

//这样定义的只可以读取,不能修改
// let fullname = computed(()=>{
//     console.log(11);
//     return firstname.value.slice(0,1).toUpperCase() + firstname.value.slice(1) + lastname.value;
// })

let fullname = computed({
    get() {
        return firstname.value.slice(0, 1).toUpperCase() + firstname.value.slice(1) + ' ' + lastname.value;
    },
    set(val) {
        const [str1, str2] = val.split(' ');
        firstname.value = str1;
        lastname.value = str2;
    }
})


function changeFullName() {
    console.log(fullname);
    fullname.value = 'li si';
}
</script>
