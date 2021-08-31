<template>
  <div>
    <ul class="item-list">
      <li v-for='news in this.$store.state.newsList' :key='news.id' class="post">
        <div class="points">
          {{ news.points }}
        </div>
        <div>
          <p class="item-title">
            <a v-bind:href='news.url' target="_blank">
              {{ news.title }}
            </a>
          </p>
          <small class="item-text">
            {{ news.time_ago }} by
            <router-link :to='`/user/${news.user}`' class="link-text">
              {{ news.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS_LIST');
  },
};
</script>