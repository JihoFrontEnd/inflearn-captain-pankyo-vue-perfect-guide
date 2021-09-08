import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 1
  // createElement => Hyper Script
  // DOM을 지칭하는 용어
  // 그래서 'h'라고 줄여서 사용하는 것이다.
  // render: function(createElement) {
  //   return createElement(App);
  // },
  // 2
  // render: function(h) {
  //   return h(App);
  // },
  // 3
  // render: (h) => {
  //   return h(App);
  // },
  // 4
  // render: h => h(App),
}).$mount('#app')
