import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    itemList: [],
    userInfo: {},
    itemInfo: {},
  },
  getters: {
    ITEM_LIST: (state) => state.itemList,
    getItemInfo: (state) => state.itemInfo,
  },
  mutations,
  actions,
});