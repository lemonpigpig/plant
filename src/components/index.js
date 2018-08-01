import Message from '@/components/message'
import Toast from '@/components/ui/Toast.vue'

const components = [
  Message,
  Toast
]
const install = function(Vue, opts = {}) {
  
  components.forEach(component => {
    console.log('-------component-----:', component.name)
    Vue.component(component.name, component)
  })
  Vue.prototype.$message = Message
}

export default {
  install,
  Message
}