import Vue from 'vue'
import App from './App.vue'

// 指定不显示非生产环境模式的提示
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: (h) => h(App),
})
