import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import router from '.'

// 所有静态路由配置的数组
export default [
  { path: '/', component: Home },
  {
    path: '/search/:keyworld',
    name: 'search',
    component: Search,
    props: (route) => ({
      keyworld: route.params.keyworld,
      keyworldQuery: route.query.keyworldQuery,
    }),
  },
  { path: '/register', component: Register, meta: { isHideFooter: true } },
  { path: '/login', component: Login, meta: { isHideFooter: true } },
]
