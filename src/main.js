// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '@/store'

import Cookie from 'js-cookie'

import components from '@/components'
Vue.use(components)

import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)


import router from './router'

import '@/lib/font-size.js'

Vue.config.productionTip = false

router.beforeEach((to, from, next)=>{
  const { requireAuth } = to.meta
  const { name } = to
  // if (this.type !== '1') {
  //   localStorage.removeItem('wishDetail')
  // }
  const notRemove = ['AddPreview', 'WishTemplate']
  if (to.name === 'Add') {
    console.log('-------from---------:', from, to)
    if (!notRemove.includes(from.name)) {
      localStorage.removeItem('wishDetail')
    }
  }
  if (requireAuth){
    const reciever = ['ToCardList']
    if (reciever.includes(name)) {
      // 收花人 cookie recieveInfo
      if (!(Cookie.get('recieveInfo') && JSON.parse(Cookie.get('recieveInfo')) && JSON.parse(Cookie.get('recieveInfo')).code)) {
        router.push(`/login/1?name=${name}`)
      } else {
        console.log('get cookie:', JSON.parse(Cookie.get('recieveInfo')))
        next()
      }
    } else {
      // 订花人 cookie giverInfo
      if (!(Cookie.get('giverInfo') && JSON.parse(Cookie.get('giverInfo')) && JSON.parse(Cookie.get('giverInfo')).code)) {
        router.push(`/login/0?name=${name}`)
      } else {
        next()
      }
    }
    console.log('----to.meta.requireAuth---:', requireAuth, '----name--:', name)
  } else {
    next();
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
