import Vue from 'vue'
import vueRouter from 'vue-router'
import routes from './router'

// 声明使用插件
Vue.use(vueRouter)

const originalPush = vueRouter.prototype.push
const originalReplace = vueRouter.prototype.replace

vueRouter.prototype.push = function push(location, onResolve, onReject) {
  console.log('push', onResolve, onReject)
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch(() => {})
}

vueRouter.prototype.replace = function replace(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalReplace.call(this, location, onResolve, onReject)
  }
  return originalReplace.call(this, location).catch(() => {})
}

// 向往默认暴露对象
export default new vueRouter({
  mode: 'history', //没有#模式
  routes,
})
