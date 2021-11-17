import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/scss/styles.scss';
// import 'materialize-css';
// import 'materialize-css/sass/materialize.scss';

import axios from 'axios';
window.$axios = Vue.prototype.$axios = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 30000,
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': process.env.VUE_APP_RAPID_API_KEY,
  },
});

import _ from 'lodash';
window._ = Vue.prototype._ = _;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
