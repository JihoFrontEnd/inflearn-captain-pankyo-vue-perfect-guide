// import NewsView from '../views/NewsView.vue';
// import AskView from '../views/AskView.vue';
// import JobsView from '../views/JobsView.vue';

import ListView from './ListView.vue'

export default function createListView(name) {
  return {
    name,
    render(createElment) {
      return createElment(ListView);
    },
  };
};