// 负责所有全局自定义组件的注册
import PageTools from './pagetools'
export default {
  install(Vue) {
    // 组件的注册
    Vue.component('pagetools', PageTools)
  }
}
