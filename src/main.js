import Vue from 'vue'
import App from './App.vue'

//引入ui组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


//引入vue-route
//vue-resource
//
import VueRouter from 'vue-router'

import VueResource from 'vue-resource'

//导入路由配置模块
import routes from './routeConfig.js'

Vue.use(MintUI);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(routes);


//配置路由信息
const router = new VueRouter({
  routes,
})

new Vue({
  VueResource,
  router,
  el: '#app',
  render: h => h(App)
})
