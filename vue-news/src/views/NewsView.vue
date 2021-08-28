<template>
  <div>
    <div v-for="news in newsList" :key="news.id">
      {{ news.title }}
    </div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api';

export default {
  data() {
    return {
      newsList: [],
    };
  },
  created() {
    let vm = this;
    fetchNewsList()
      .then(response => {
        console.log(response);
        vm.newsList = response.data;
      })
      .catch(error => console.log(error))
  },
}
</script>

<style>

</style>