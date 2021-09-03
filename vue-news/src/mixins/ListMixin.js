import bus from '../utils/bus';

export default {
  created() {
    bus.$emit('start:spinner');
    this.$store.dispatch('FETCH_ITEM_LIST', this.$route.name)
      .then(() => {
        console.log('fetched');
        bus.$emit('end:spinner');
      })
      .catch((e) => console.error(e));
  },
};