// 负责所有全局自定义组件的注册
import PageTools from './pagetools'
import UploadExcel from './UploadExcel'
import ImageUpload from './ImageUpload'
import Print from 'vue-print-nb'
export default {
  install(Vue) {
    // 组件的注册
    Vue.component('pagetools', PageTools)
    Vue.component('uploadexcel', UploadExcel)
    Vue.component('ImageUpload', ImageUpload)
    Vue.use(Print) // 注册打印组件
  }
}
