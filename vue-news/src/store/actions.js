import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchItemInfo
} from '../api';

export default {
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
  FETCH_USER_INFO({ commit }, username) {
    fetchUserInfo(username)
      .then(({ data }) => commit('SET_USER_INFO', data))
      .catch(e => console.error(e));
  },
  FETCH_ITEM_INFO({ commit }, itemid) {
    fetchItemInfo(itemid)
      .then(({ data }) => commit('SET_ITEM_INFO', data))
      .catch(e => console.error(e));
  },
};