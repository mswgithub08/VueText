import Vue from 'vue'
import Vuex from 'vuex'
import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.min.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
Vue.prototype.$axios=axios;

Vue.use(Vuex)
Vue.use(Mint);
Vue.use(VueRouter)

const store = new Vuex.Store({
  state: {
    count: 0,
    num:0,
    page:0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    add(state,n){
    	state.num=n
    },
    page(state,m){
    	state.page=m
    }
  }
})

import router from './js/router.js'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
