<template>
  <div>
    <ListItem />
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus';

export default {
  components: { ListItem },
  created() {
    bus.$emit('start:spinner');
    this.$store.dispatch('FETCH_NEWS_LIST')
      .then(() => {
        console.log('fetched');
        bus.$emit('end:spinner');
      })
      .catch((e) => console.error(e));
  },
};
</script>