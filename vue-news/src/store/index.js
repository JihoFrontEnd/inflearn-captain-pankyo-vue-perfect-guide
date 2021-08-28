import Vue from 'vue'
import Vuex from 'vuex';

import { fetchNewsList, fetchJobsList, fetchAskList } from '../api';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    newsList: [],
    jobsList: [],
    askList: [],
  },
  mutations: {
    SET_NEWS_LIST(state, newsList) {
      state.newsList = newsList;
    },
    SET_JOBS_LIST(state, jobsList) {
      state.jobsList = jobsList;
    },
    SET_ASK_LIST(state, askList) {
      state.askList = askList;
    },
  },
  actions: {
    FETCH_NEWS_LIST(context) {
      fetchNewsList()
        .then(response => context.commit('SET_NEWS_LIST', response.data))
        .catch(e => console.error(e));
    },
    FETCH_JOBS_LIST(context) {
      fetchJobsList()
        .then(response => context.commit('SET_JOBS_LIST', response.data))
        .catch(e => console.error(e));
    },
    FETCH_ASK_LIST(context) {
      fetchAskList()
        .then(response => context.commit('SET_ASK_LIST', response.data))
        .catch(e => console.error(e));
    },
  },
});