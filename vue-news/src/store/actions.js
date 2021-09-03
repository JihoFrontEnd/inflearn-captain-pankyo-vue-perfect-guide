import {
  fetchItemList,
  // fetchNewsList,
  // fetchJobsList,
  // fetchAskList,
  fetchUserInfo,
  fetchItemInfo
} from '../api';

export default {
  FETCH_ITEM_LIST({ commit }, pageName) {
    fetchItemList(pageName)
      .then(({ data }) => commit('SET_ITEM_LIST', data))
      .catch(e => console.error(e));
  },
  // FETCH_NEWS_LIST({ commit }) {
  //   fetchNewsList()
  //     .then(({ data }) => commit('SET_NEWS_LIST', data))
  //     .catch(e => console.error(e));
  // },
  // FETCH_JOBS_LIST({ commit }) {
  //   fetchJobsList()
  //     .then(({ data }) => commit('SET_JOBS_LIST', data))
  //     .catch(e => console.error(e));
  // },
  // FETCH_ASK_LIST({ commit }) {
  //   fetchAskList()
  //     .then(({ data }) => commit('SET_ASK_LIST', data))
  //     .catch(e => console.error(e));
  // },
  FETCH_USER_INFO({ commit }, userName) {
    fetchUserInfo(userName)
      .then(({ data }) => commit('SET_USER_INFO', data))
      .catch(e => console.error(e));
  },
  FETCH_ITEM_INFO({ commit }, itemId) {
    fetchItemInfo(itemId)
      .then(({ data }) => commit('SET_ITEM_INFO', data))
      .catch(e => console.error(e));
  },
};