<template>
  <div>
    <ul class="news-list">
      <li v-for='ask in getAskList' :key='ask.id' class="post">
        <div class="points">
          {{ ask.points }}
        </div>
        <div>
          <p class="news-title">
            <router-link v-bind:to="`item/${ask.id}`">
              {{ ask.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ ask.time_ago }} by
            <router-link :to='`/user/${ask.user}`' class="link-text">
              {{ ask.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  created() {
    this.$store.dispatch('FETCH_ASK_LIST');
  },
  computed: {
    ...mapGetters(['getAskList']),
  }
};
</script>

<style scoped>
.news-list {
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
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>