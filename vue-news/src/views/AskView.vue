<template>
  <div>
    <div v-for="ask in this.$store.state.askList" :key="ask.id">
      {{ ask.title }}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_ASK_LIST');
  },
};
</script>

<style>

</style>