<template>
  <div>
    <div v-for="ask in getAskList" :key="ask.id">
      {{ ask.title }}
    </div>
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