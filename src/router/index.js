import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '@/views/register'
import center from '@/views/center'
import login from '@/views/login'
import edit from '@/views/edit'
import home from '@/views/home'
Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/register',
    component: register
  },
  {
    path: '/login',
    component: login
  }, {
    path: '/center',
    component: center
  }, {
    path: '/edit',
    component: edit
  }, {
    path: '/home',
    component: home
  }, {
    path: '*',
    redirect: '/home'
  }]
})
// 路由卫士
router.beforeEach((to, from, next) => {
  if (to.path === '/center' || to.path === '/edit') {
    if (localStorage.getItem('myid') && localStorage.getItem('mytoken')) {
      next()
    } else {
      next('/login')
      Vue.prototype.$Toast.fail('登陆过期，请重新登陆')
    }
  } else {
    next()
  }
})
export default router
