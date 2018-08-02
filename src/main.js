// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '@/store'

import components from '@/components'
Vue.use(components)

import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)


import router from './router'

import '@/lib/font-size.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
