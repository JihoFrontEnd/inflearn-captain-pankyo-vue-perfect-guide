import {
  fetchItemList,
  fetchUserInfo,
  fetchItemInfo
} from '../api';

export default {
  FETCH_ITEM_LIST({ commit }, pageName) {
    return fetchItemList(pageName)
      .then(({ data }) => commit('SET_ITEM_LIST', data))
      .catch(e => console.error(e));
  },
  FETCH_USER_INFO({ commit }, userName) {
    return fetchUserInfo(userName)
      .then(({ data }) => commit('SET_USER_INFO', data))
      .catch(e => console.error(e));
  },
  FETCH_ITEM_INFO({ commit }, itemId) {
    return fetchItemInfo(itemId)
      .then((response) => {
        commit('SET_ITEM_INFO', response);
        return response;
      })
      .catch(e => console.error(e));
  },
};