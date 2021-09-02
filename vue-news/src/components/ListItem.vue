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
    const name = this.$route.name;
    const dispatch = this.$store.dispatch
    switch (name) {
      case 'news':
        dispatch('FETCH_NEWS_LIST');
        break;
      case 'ask':
        dispatch('FETCH_ASK_LIST');
        break;
      case 'jobs':
        dispatch('FETCH_JOBS_LIST');
        break;
    }
  },
};
</script>

<style scoped>
.item-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.item-title {
  margin: 0;
}
.item-text {
  color: #828282;
}
</style>