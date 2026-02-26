// 该文件专门用于创建整个应用的路由器
import {createRouter,createWebHistory} from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

//创建并暴露一个路由器
const router = createRouter({
	history:createWebHistory(),
	routes:[
		{
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home,
			children:[
				{
					path:'news',
					component:News,
				},
				{
					path:'message',
					component:Message,
					children:[
						{
							//params参数 需要占位,在参数后加一个问号可传可不传
							name:'xiangqing',
							// path:'detail/:id/:title/:content?',
							path:'detail',
							component:Detail,

							//第一种写法将路由所有的params参数映射为组件的props 
							// props:true

							//第二种写法 函数写法,可以自己决定传设么参数,path就写成detial就行,query参数会自动映射为组件的props
							props(route){
								console.log('11111111',route);
								return route.query;		
							}
						}
					]
				}
			]
		}
	]
})

//暴露路由实例
export default router;
