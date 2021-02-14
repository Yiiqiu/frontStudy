import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../views/Home.vue'
import Center from '@/views/Center'
import Cinema from '@/views/Cinema'
import Film from '@/views/Film'
import Comingsoon from '@/views/Film/Comingsoon'
import Nowplaying from '@/views/Film/Nowplaying'
import Detail from '@/views/Detail'
import Login from '@/views/Login'

Vue.use(Router)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const router = new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/film',
      component: Film,
      children: [
        {
          path: '/film/nowplaying',
          component: Nowplaying
        },
        {
          path: '/film/comingsoon',
          component: Comingsoon
        },
        {
          // 如果输入的都不符合，就重定向到nowplaying
          path: '',
          redirect: '/film/nowplaying'
        }
      ]
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/center',
      component: Center
    },
    {
      path: '/detail/:myid',
      name: 'mydetail',
      component: Detail
    },
    {
      path: '/login',
      component: Login
    },
    {
      // 如果输入的都不符合，就重定向到/film
      path: '*',
      redirect: '/film'
    }
  ]
})

export default router
