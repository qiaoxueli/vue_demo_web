import Vue from 'vue';
import store from './store'
import Home from './Home.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { reactive, ref } from 'vue';
import VueRouter from "vue-router"
import router from "./router"
import './styles/global.css';
import './plugins/avue'

// 以下为bpmn工作流绘图工具的样式
import 'bpmn-js/dist/assets/diagram-js.css' // 左边工具栏以及编辑节点的样式
import 'bpmn-js-properties-panel/dist/assets/properties-panel.css' // 右边工具栏样式
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'




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

