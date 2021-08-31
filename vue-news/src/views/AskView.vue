<template>
  <div>
    <ul class="item-list">
      <li v-for='ask in getAskList' :key='ask.id' class="post">
        <div class="points">
          {{ ask.points }}
        </div>
        <div>
          <p class="item-title">
            <router-link v-bind:to="`item/${ask.id}`">
              {{ ask.title }}
            </router-link>
          </p>
          <small class="item-text">
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