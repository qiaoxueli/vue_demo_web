import Vue from 'vue';
import store from './store'
import Home from './Home.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { reactive, ref } from 'vue';
import VueRouter from "vue-router"
import router from "./router"



Vue.config.productionTip = false


Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(reactive);
Vue.use(ref);



new Vue({
  router,
  store,
  render: h => h(Home),
}).$mount('#app')

