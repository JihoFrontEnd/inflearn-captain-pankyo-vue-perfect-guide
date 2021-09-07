import Vue from 'vue'
import App from './App.vue'

import ChartPlugin from './plugins/ChartPlugin';

Vue.config.productionTip = false;

// install(Vue) 메소드가 실행되는 지점
Vue.use(ChartPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
