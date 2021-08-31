<template>
  <div>
    <p v-for="ask in getAskList" :key="ask.id">
      <router-link v-bind:to="`item/${ask.id}`">
        {{ ask.title }}
      </router-link>
      <small>
        {{ ask.time_ago }} by {{ ask.user }}
      </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  created() {
    this.$store.dispatch('FETCH_ASK_LIST');
  },
  computed: {
    ...mapGetters(["getAskList"])
  }
};
</script>

<style>

</style>