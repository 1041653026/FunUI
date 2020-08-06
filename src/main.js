import Vue from 'vue';
import App from './App.vue';
import 'normalize.css/normalize.css';
import './main.scss';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
