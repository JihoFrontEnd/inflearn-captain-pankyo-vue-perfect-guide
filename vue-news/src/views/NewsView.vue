<template>
  <div>
    <div v-for="news in this.$store.state.newsList" :key="news.id">
      {{ news.title }}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS_LIST');
  },
}
</script>

<style>

</style>