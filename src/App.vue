<template>
  <div>
    <h1>Vue Router Demo</h1>
    <router-link to="/about">About</router-link>
    <router-link to="/home">Home</router-link>
    <router-view></router-view>

    <h2>当前的计算值为{{ countStore.sum }}</h2>

    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">
        {{ talk.content }}
      </li>
    </ul>
  </div>
    
</template>

<script setup lang="ts" name="App">
//引入对应的store
import {useTalkStore} from './store/talk'
import {useCountStore} from './store/count'

//调用对应的store
const countStore = useCountStore();
const talkStore = useTalkStore();

</script>
