<template>
  <div class="father">
    <h3>父组件v-model</h3>
    <h4>
      {{ userName }}
      {{ passWord }}
    </h4>
    <!-- <input type="text" v-model="userName" /> -->

    <!-- <input type="text" :value="userName" @input="userName=(<HTMLInputElement>$event.target).value"> -->

      <AtguiguInput v-model:ming="userName" v-model:mima = "passWord" />
      //本质是和这个
      <!-- <AtguiguInput :modelValue="userName" @update:modelValue="userName=$event" /> -->
  </div>
</template>

<script setup lang="ts" name="Father">
	import { ref } from "vue";
  import AtguiguInput from './AtguiguInput.vue'
  let userName = ref('zhangsan');
  let passWord = ref('123456');

</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
