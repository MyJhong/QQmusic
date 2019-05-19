import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
import 'common/stylus/index.styl'

fastclick.attach(document.body)


new Vue({
  el: '#app',
  router,
  render : h => h(App),

})
