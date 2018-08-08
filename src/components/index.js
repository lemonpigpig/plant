import Message from '@/components/message'

const components = [
  Message
]
// here add global component or directive
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