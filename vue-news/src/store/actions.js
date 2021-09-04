import {
  fetchItemList,
  fetchUserInfo,
  fetchItemInfo
} from '../api';

export default {
  async FETCH_ITEM_LIST({ commit }, pageName) {
    const response = await fetchItemList(pageName);
    commit('SET_ITEM_LIST', response.data);
    return response;
  },
  async FETCH_USER_INFO({ commit }, userName) {
    const response = await fetchUserInfo(userName);
    commit('SET_USER_INFO', response.data);
    return response;
  },
  async FETCH_ITEM_INFO({ commit }, itemId) {
    const response = await fetchItemInfo(itemId);
    commit('SET_ITEM_INFO', response.data);
    return response;
  }
};
