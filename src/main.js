import Vue from 'vue';
import App from './App.vue';

import {data} from './data';
import {hello} from './alert';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

for (let key in data) {
  hello(data[key]);
}


