<template>
	<h1>消息详情</h1>
	<li>
		
		标号:{{id }}
	</li>
	<li>
		消息:{{ title }}
	</li>
	<li>
		内容:{{ content }}
	</li>
</template>

<script setup lang="ts" name="Detail">
import {defineProps} from 'vue'

defineProps(['id','title','content']);

</script>