import Vue from 'vue'
import Vuex from 'vuex';

import { fetchNewsList } from '../api';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    newsList: [],
  },
  mutations: {
    SET_NEWS_LIST(state, newsList) {
      state.newsList = newsList;
    },
  },
  actions: {
    FETCH_NEWS_LIST(context) {
      fetchNewsList()
        .then(response => context.commit('SET_NEWS_LIST', response.data))
        .catch(e => console.error(e));
    },
  },
});