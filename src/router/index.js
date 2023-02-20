import Vue from "vue";

import VueRouter from "vue-router";
import Main from './../view/Main.vue';
import Login from './../view/Login.vue';
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:Main,
        name:'Main',
        redirect:"/home",
        children:[
            // {path:'home',name:'home',component:Home},
            // {path:'user',name:'user',component:User},
            // {path:'mall',name:'mall',component:Mall},
            // {path:'page1',name:'page1',component:Pageone},
            // {path:'page2',name:'page2',component:PageTwo}
        ]
    },
    {
        path:'/Login',
        component:Login,
        name:'login'
    }

   
]

const router = new VueRouter({
    routes
})

export default router

