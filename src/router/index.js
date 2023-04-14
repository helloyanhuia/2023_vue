import Vue from 'vue'
import vueRouter from 'vue-router'
import router from '@/router'

// 声明使用插件
Vue.use(vueRouter)

// 向往默认暴露对象
export default new vueRouter({
  mode: 'history', //没有#模式
  router,
})
