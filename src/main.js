import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 指定不显示非生产环境模式的提示
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
