<template>
<input type="text" :value="ming" @input="emitter('update:ming', ($event.target as HTMLInputElement).value)" >
<br>
<input type="text" :value="mima" @input="emitter('update:mima', ($event.target as HTMLInputElement).value)" >
</template>

<script setup lang="ts" name="AtguiguInput">
import { ref } from 'vue'
defineProps(['ming','mima'])
let emitter = defineEmits(['update:ming','update:mima'])


</script>


<style scoped>
  input {
    border: 2px solid black;
    background-image: linear-gradient(45deg,red,yellow,green);
    height: 30px;
    font-size: 20px;
    color: white;
  }
</style>