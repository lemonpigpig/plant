// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '@/store'

import components from '@/components'
Vue.use(components)
console.log('-----components----:', components)
// const install = function(Vue, opts = {}) {
//   components.map(component => {
//     Vue.component(component.name, component);
//   })

//   for (let i=0; i<Object.keys(ui).length; i++) {
//     let componentName = Object.keys(ui)[i]
//     Vue.component(componentName, ui[componentName])
//   }
//   Vue.prototype.$message = Message
// }
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
