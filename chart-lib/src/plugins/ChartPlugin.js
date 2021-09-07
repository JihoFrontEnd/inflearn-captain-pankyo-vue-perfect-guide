// https://vuejs.org/v2/guide/plugins.html
import Chart from 'chart.js/auto';

export default {
  install(Vue) {
    Vue.prototype.$_Chart = Chart;
  }
}