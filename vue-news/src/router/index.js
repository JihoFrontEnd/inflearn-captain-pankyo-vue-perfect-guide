import Vue from 'vue';
import VueRouter from 'vue-router';

import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';

import { store } from '../store';
import bus from '../utils/bus';

// import createListView from '../views/CreateListView';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      name: 'news',
      // component: createListView('NewsView'),
      component: NewsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_ITEM_LIST', to.name)
          .then(() => {
            bus.$emit('end:spinner');
            next();
          })
          .catch((e) => console.error(e));
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      // component: createListView('AskView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_ITEM_LIST', to.name)
          .then(() => {
            bus.$emit('end:spinner');
            next();
          })
          .catch((e) => console.error(e));
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      // component: createListView('JobsView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_ITEM_LIST', to.name)
          .then(() => {
            bus.$emit('end:spinner');
            next();
          })
          .catch((e) => console.error(e));
      },
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ]
});