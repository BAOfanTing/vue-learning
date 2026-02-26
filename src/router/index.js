import {createRouter,createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import News from '../pages/News.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:'home',
            path:'/home',
            component:Home
        },
        {
            name:'about',
            path:'/about',
            component:About,
            children:[
                {
                    name:'news',
                    path:'news',
                    component:News,
                }
            ]
        }
    ]
})

export default router;