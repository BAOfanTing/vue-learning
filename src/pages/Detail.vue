<template>
	<h1>消息详情</h1>
	<li>
		//使用params参数获取路由参数
		标号:{{ route.params.id }}
	</li>
	<li>
		消息:{{ route.params.title }}
	</li>
	<li>
		内容:{{ route.params.content }}
	</li>
</template>

<script setup lang="ts" name="Detail">
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.params)

</script>