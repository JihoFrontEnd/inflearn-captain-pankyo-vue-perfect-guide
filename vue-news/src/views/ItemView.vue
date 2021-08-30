<template>
  <div>
    <p>id: {{ itemInfo.id }}</p>
    <div>
      content
      <p v-html="itemInfo.content"></p>
    </div>
    <p v-for="comment in itemInfo.comments" :key="comment.id">
      {{ comment.user }}:
      <span v-html="comment.content"></span>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    itemInfo() {
      return this.$store.state.itemInfo
    },
  },
  created() {
    const itemid = this.$route.query.id;
    this.$store.dispatch('FETCH_ITEM_INFO', itemid);
    console.log(this.itemInfo);
  },
}
</script>

<style></style>