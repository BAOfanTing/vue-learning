<template>
	<div>
		<ul>
			<li v-for="m in messageList" :key="m.id">
				<router-link replace :to="{
					//只能使用name来匹配路由
					name:'xiangqing',
					query:{
						id:m.id,
						title:m.title,
						content:m.content	
					}
				}">
					
					{{ m.title }}
				
				</router-link>

			</li>
		</ul>
		<hr>
		<router-view></router-view>
	</div>
</template>

<script setup lang="ts" name="Message">


let messageList = [
	{ id: '001', title: '消息001', content: '内容001' },
	{ id: '002', title: '消息002', content: '内容002' },
	{ id: '003', title: '消息003', content: '内容003' }
]

</script>