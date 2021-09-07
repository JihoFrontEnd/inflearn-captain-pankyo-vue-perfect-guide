<template>
  <canvas ref="barChart" width="400" height="400"></canvas>
</template>

<script>
export default {
  props: ['propsdata'],
  mounted() {
    let barChart = new this.$_Chart(this.$refs.barChart, {
      type: 'bar',
      data: this.propsdata,
      options: {
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
    barChart.resize(300, 300);
  },
}
</script>

<style>

</style>