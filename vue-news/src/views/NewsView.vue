<template>
  <div>
    <div v-for="news in newsList" :key="news.id">
      {{ news.title }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newsList: [],
    };
  },
  created() {
    let vm = this;
    axios.get('https://api.hnpwa.com/v0/news/1.json')
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