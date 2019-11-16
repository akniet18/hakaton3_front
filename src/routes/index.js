import VueRouter from 'vue-router'
import HomeApp from '.././components/home'
import NProgress from 'nprogress'
import Vue from 'vue'
import lazyLoading from './lazyLoading.js'
import 'nprogress/nprogress.css'

Vue.use(VueRouter);
Vue.use(NProgress);

const routes = [
  {
    path: '',
    component: HomeApp,
    children: [
      {
        path: '',
        component: lazyLoading('search'),
        children: [
          {
            path: '',
            name: 'home',
            component: lazyLoading('institutes')
          },
          {
            path: ':id',
            name: 'institut',
            component: lazyLoading('institut')
          },
          {
            path: 'search/:search_s',
            name: 'list',
            component: lazyLoading('list')
          }
        ]
      },
      {
        path: '/user/:id',
        name: 'user',
        component: lazyLoading('user')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: lazyLoading('auth/login')
  },
  {
    path: '/register',
    name: 'reg',
    component: lazyLoading('auth/register')
  }
]

const router = new VueRouter({ mode: 'history', routes: routes });

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach(()=> {
  NProgress.done()
})


export default router

