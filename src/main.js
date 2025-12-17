import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import * as ECharts from 'echarts';
Vue.prototype.$echarts = ECharts;

import $ from 'jquery'
window.$ = $
Vue.prototype.$ = $


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
