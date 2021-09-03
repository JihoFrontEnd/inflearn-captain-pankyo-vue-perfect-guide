// import NewsView from '../views/NewsView.vue';
// import AskView from '../views/AskView.vue';
// import JobsView from '../views/JobsView.vue';

import ListView from './ListView.vue';
import bus from '../utils/bus';

export default function createListView(name) {
  return {
    name,
    created() {
      bus.$emit('start:spinner');
      this.$store.dispatch('FETCH_ITEM_LIST', this.$route.name)
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
        .catch((e) => console.error(e));
    },
    render(createElment) {
      return createElment(ListView);
    },
  };
}
