<template>
	<h1>消息详情</h1>
	<li>
		标号:{{ query.id }}
	</li>
	<li>
		消息:{{ query.title }}
	</li>
</template>

<script setup lang="ts" name="Detail">
import { toRefs } from 'vue'
import { useRoute } from 'vue-router'
let route = useRoute();
let {query} = toRefs(route);
console.log('@', route);
</script>