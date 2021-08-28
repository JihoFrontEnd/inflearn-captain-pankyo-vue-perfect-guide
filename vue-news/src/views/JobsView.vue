<template>
  <div>
    <div v-for="job in jobsList" :key="job.id">
      {{ job.title }}
    </div>
  </div>
</template>

<script>
import { fetchJobsList } from '../api';

export default {
  data() {
    return {
      jobsList: [],
    };
  },
  created() {
    fetchJobsList()
      .then(response => this.jobsList = response.data)
      .catch(e => console.error(e));
  },
};
</script>

<style>

</style>