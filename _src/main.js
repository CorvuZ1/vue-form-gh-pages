import Vue from 'vue';
import Vuelidate from "vuelidate";
import App from './App.vue';

Vue.config.productionTip = true;

Vue.use(Vuelidate)

new Vue({
  render: h => { return h(App) },
}).$mount('#app');
Vue.config.devtools = true;
