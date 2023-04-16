import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './components/TypeNav'

// 指定不显示非生产环境模式的提示
Vue.config.productionTip = false

// 注册全局组件
Vue.component(TypeNav.name, TypeNav)

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
