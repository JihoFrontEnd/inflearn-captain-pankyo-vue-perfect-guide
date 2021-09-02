<template>
  <div>
    <ul class="item-list">
      <li v-for='item in itemList' :key='item.id' class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <p class="item-title">
            <a v-bind:href='item.url' target="_blank">
              {{ item.title }}
            </a>
          </p>
          <small class="item-text">
            {{ item.time_ago }} by
            <router-link :to='`/user/${item.user}`' class="link-text">
              {{ item.user }}
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
  data() {
    return {
      name: '',
    };
  },
  computed: {
    ...mapGetters(['NEWS_LIST', 'ASK_LIST', 'JOBS_LIST']),
    itemList() {
      switch (this.name) {
        case 'news':
          return this.NEWS_LIST;
        case 'ask':
          return this.ASK_LIST;
        case 'jobs':
          return this.JOBS_LIST;
      }
      return null;
    },
  },
  created() {
    this.name = this.$route.name;
    switch (this.name) {
      case 'news':
        this.$store.dispatch('FETCH_NEWS_LIST');
        break;
      case 'ask':
        this.$store.dispatch('FETCH_ASK_LIST');
        break;
      case 'jobs':
        this.$store.dispatch('FETCH_JOBS_LIST');
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