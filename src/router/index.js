import Router from "vue-router"
import Register from "../views/user/Register.vue"
import Login from "../components/HelloWorld.vue"

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
      component: Login
    },
  ],
})

 
// let router = new Router({
//     routes,
//     mode: 'history',
//     // 全局配置激活路由的class类名，处与活跃（动态）就会用上这个类名
//     linkActiveClass: 'active'
// })
 
 
// 设置路由守卫，在进页面之前，判断有token，才进入页面，否则返回登录页面
// if (localStorage.get("token")) {
//     store.commit("setToken", localStorage.getItem("token"));
//   }
// router.beforeEach((to, from, next) => {
//     // 设置路由守卫，在进页面之前，判断有token，才进入页面
//         if (token) {
//             next('/')
//         } else {
//             // 没有token就调用后端接口，跳转地址
//             getAddress().then((res) => {
//               if (res.data.code === 200) {
//                 location.href = res.data.data.redirectUri
//               }
//             })
//         }
// });
