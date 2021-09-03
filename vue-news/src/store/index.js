import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    itemList: [],
    // newsList: [],
    // askList: [],
    // jobsList: [],
    userInfo: {},
    itemInfo: {},
  },
  getters: {
    ITEM_LIST: (state) => state.itemList,
    // NEWS_LIST: (state) => state.newsList,
    // ASK_LIST: (state) => state.askList,
    // JOBS_LIST: (state) => state.jobsList,
    getAskList: (state) => state.askList,
    getItemInfo: (state) => state.itemInfo,
  },
  mutations,
  actions,
});