import Vue from 'vue'
import App from './App'
import store from './store'

// minu-UI
import 'mint-ui/lib/style.css'
import { Actionsheet } from 'mint-ui';
Vue.component(Actionsheet.name, Actionsheet);
import { DatetimePicker } from 'mint-ui';
Vue.component(DatetimePicker.name, DatetimePicker);

  import router from './router/index'
import LyTab from 'ly-tab'
import './../static/css/reset.css'
import '@/common/css/style.css'
Vue.use(LyTab)

// 图片懒加载
import VueLazyLoad from 'vue-lazyload'
import loading from './common/images/1.gif'
Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: loading,
  attempt: 1
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
