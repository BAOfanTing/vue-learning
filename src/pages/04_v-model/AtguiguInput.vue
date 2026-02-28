<template>
  <input type="text" v-model="userName">
  <br>
  <input
  type = "text"
  :value="userName"
  @input="userName=(<HTMLInputElement>$event.target).value"
    >
</template>

<script setup lang="ts" name="AtguiguInput">
import { ref } from 'vue'

const userName = ref('')

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