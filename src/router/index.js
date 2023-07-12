import Router from "vue-router"
import Register from "../views/user/Register.vue"
import Index from "../views/layout/index.vue"

export default  new Router({
  routes:[
    {
      path: "/",
      redirect: '/login'
    },
    {
      path:'/register',
      name:'register',
      component: Register
    },
    {
      path:'/login',
      name:'login',
      component: ()=>import('../components/HelloWorld.vue')
    },
     //一级路由
    {
      path: '/index',
      name: 'index',
      component: Index,
      //路由嵌套
      children:[
          {path: '/index/userMgm',component: () => import('../views/user/user.vue')},
          {path: '/index/systemConfig',component: () => import('../views/system/SystemConfig.vue')},
          {
            path:'/index/workFlow',
            component: () => import('../views/workFlow/workFlow.vue')
          }
      ]
    },
    
  ]
})

