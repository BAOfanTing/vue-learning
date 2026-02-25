


<template>
  <h1>You did it!</h1>
  <Person v-if="isShow"></Person>
</template>

<style scoped></style>

<script setup lang="ts" name = "App">
import Person from './components/Person.vue';
import {ref} from 'vue';
let isShow = ref(true);

</script>