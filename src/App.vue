


<template>
  <h1>You did it!</h1>
  <!-- <Person v-if="isShow"></Person> -->
  <div>
    <router-link to="/home">Home</router-link><br>
    <router-link to="/about">About</router-link><br>
    <router-link to="/about/news">News</router-link><br>
  </div>
  //路由匹配到的组件会渲染到这里
  <router-view></router-view>
</template>

<style scoped></style>

<script setup lang="ts" name = "App">
import Person from './components/Person.vue';
import {ref} from 'vue';
let isShow = ref(true);

</script>