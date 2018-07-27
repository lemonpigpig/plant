// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '@/store'
import ui from '@/components/ui'

for (let i=0; i<Object.keys(ui).length; i++) {
  let componentName = Object.keys(ui)[i]
  // console.log('----componentName, ui[componentName]---:', componentName, ui[componentName])
  Vue.component(componentName, ui[componentName])
}

// Vue.com
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
