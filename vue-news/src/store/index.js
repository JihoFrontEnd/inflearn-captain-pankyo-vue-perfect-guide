import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    newsList: [],
    askList: [],
    jobsList: [],
    userInfo: {},
    itemInfo: {},
  },
  getters: {
    NEWS_LIST: (state) => state.newsList,
    ASK_LIST: (state) => state.askList,
    JOBS_LIST: (state) => state.jobsList,
    getAskList: (state) => state.askList,
    getItemInfo: (state) => state.itemInfo,
  },
  mutations,
  actions,
});