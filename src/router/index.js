import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login'
import Giver from '@/pages/Giver'
import Add from '@/pages/Add'
import WishTemplate from '@/pages/WishTemplate'
import Detail from '@/pages/Detail'
import CardList from '@/pages/CardList'
import ToCardList from '@/pages/ToCardList'
import DefaultCard from '@/pages/DefaultCard'

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
      component: Add,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/wishTemplate',
      name: 'WishTemplate',
      component: WishTemplate,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/detail/:type',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/list',
      name: 'CardList',
      component: CardList,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/toList',
      name: 'ToCardList',
      component: ToCardList,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/defaultCard',
      name: 'DefaultCard',
      component: DefaultCard
    },
    
  ]
})
