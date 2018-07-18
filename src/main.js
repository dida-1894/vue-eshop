import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"

var VueTouch = require('vue-touch');
Vue.use(VueTouch, {name: 'v-touch'})
require('./mock/mock.js')
Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
