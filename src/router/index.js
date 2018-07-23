import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login'
import Giver from '@/pages/Giver'
import Add from '@/pages/Add'
import WishTemplate from '@/pages/WishTemplate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login/:id',
      name: 'Login',
      component: Login
    },
    {
      path: '/giver',
      name: 'Giver',
      component: Giver
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/wishTemplate',
      name: 'WishTemplate',
      component: WishTemplate
    },
  ]
})
