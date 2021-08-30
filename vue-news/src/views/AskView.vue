<template>
  <div>
    <p v-for="ask in getAskList" :key="ask.id">
      <a v-bind:href="ask.url">
        {{ ask.title }}
      </a>
      <small>{{ ask.time_ago }} by {{ ask.user }}</small>
    </p>
  </div>
</template>

<script>
// import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  created() {
    this.$store.dispatch('FETCH_ASK_LIST');
  },
  computed: {
    // ...mapState({
    //   askList: state => state.askList,
    // })
    ...mapGetters(["getAskList"])
  }
};
</script>

<style>

</style>