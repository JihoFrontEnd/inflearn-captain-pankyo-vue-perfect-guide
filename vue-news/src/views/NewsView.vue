<template>
  <div>
    <p v-for="news in this.$store.state.newsList" :key="news.id">
      <a v-bind:href="news.url">
        {{ news.title }}
      </a>
      <small>
        {{ news.time_ago }} by
        <router-link :to="`/user/${news.user}`">
          {{ news.user }}
        </router-link>
      </small>
    </p>
    
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_NEWS_LIST");
  },
}
</script>

<style>

</style>