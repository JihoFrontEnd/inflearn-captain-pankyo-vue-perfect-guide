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
    FETCH_NEWS_LIST({ commit }) {
      fetchNewsList()
        .then(({ data }) => commit('SET_NEWS_LIST', data))
        .catch(e => console.error(e));
    },
    FETCH_JOBS_LIST({ commit }) {
      fetchJobsList()
        .then(({ data }) => commit('SET_JOBS_LIST', data))
        .catch(e => console.error(e));
    },
    FETCH_ASK_LIST({ commit }) {
      fetchAskList()
        .then(({ data }) => commit('SET_ASK_LIST', data))
        .catch(e => console.error(e));
    },
  },
  getters: {
    getAskList: (state) => state.askList,
  },
});