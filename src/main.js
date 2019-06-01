import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
import 'common/stylus/index.styl'
import VueLazyLoad from 'vue-lazyload'
import store from './store'


fastclick.attach(document.body)
Vue.use(VueLazyLoad,{
	loading: require('common/image/default.png')
})

new Vue({
  el: '#app',
  router,
  store,
  render : h => h(App),

})
