<template>
  <div>
    <p v-for="news in this.$store.state.newsList" :key="news.id">
      <a v-bind:href="news.url">
        {{ news.title }}
      </a>
      <small>{{ news.time_ago }} by {{ news.user }}</small>
    </p>
    
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