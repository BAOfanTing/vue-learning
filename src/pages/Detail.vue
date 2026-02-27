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
import {useRoute,useRouter} from 'vue-router'
let route = useRoute();
let router = useRouter();
console.log(route.query);
console.log(route.params);
console.log(router.push);
console.log(router.replace);


defineProps(['id','title','content']);

</script>