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
    // 화살표 함수가 아닐 경우 this를 따로 바인딩 해야 한다.
    // 화살표 함수를 사용할 경우 this를 따로 바인딩 하지 않고 사용할 수 있다.
    let vm = this;
    fetchNewsList()
      .then(function(response) {
        vm.newsList = response.data;
      })
      .catch(error => console.error(error))
  },
}
</script>

<style>

</style>