<template>
  <div>
    <h1>Vue Router Demo</h1>
    <router-link to="/about">About</router-link>
    <router-link to="/home">Home</router-link>
    <router-view></router-view>
  </div>
    
</template>

<script>
	export default {
		name:'App',
	}
</script>
