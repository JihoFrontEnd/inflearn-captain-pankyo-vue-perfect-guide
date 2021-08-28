<template>
  <div>
    <div v-for="job in this.$store.state.jobsList" :key="job.id">
      {{ job.title }}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS_LIST');
  },
};
</script>

<style>

</style>