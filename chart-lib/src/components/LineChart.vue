<template>
  <canvas ref="lineChart" width="400" height="400"></canvas>
</template>

<script>
export default {
  props: ['propsdata'],
  mounted() {
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];
    const data = {
      labels: labels,
      datasets: this.propsdata,
    };
    const config = {
      type: 'line',
      data: data,
      options: {}
    };
    var lineChart = new this.$_Chart(this.$refs.lineChart, config);
    lineChart.resize(300, 300);
  },
}
</script>

<style>

</style>