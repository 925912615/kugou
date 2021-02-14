import Vue from 'vue'
import store from './store/index'
import MintUI from 'mint-ui'
import App from './App'
import router from './router'
import axios from 'axios'

import 'mint-ui/lib/style.css'
import 'common/stylus/index.styl'

Vue.use(MintUI)
// 把图片地址替换成新地址
// "http://imge.kugou.com/mcommon/{size}/20190906/20190906162520714932.jpg"
// "http://imge.kugou.com/mcommon/400/20190906/20190906162520714932.jpg"
Vue.filter('imgurl',e=>{
  return e.replace(/{size}/, '400')
})
// 长度
Vue.filter('length10',e=>{
  return e.slice(0,15)
})

Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
