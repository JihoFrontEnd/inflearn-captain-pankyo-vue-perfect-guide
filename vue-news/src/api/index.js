import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0'
};

const fetchItemList = (pageName) => axios.get(`${config.baseUrl}/${pageName}/1.json`);
// const fetchNewsList = () => axios.get(`${config.baseUrl}/news/1.json`);
// const fetchAskList = () => axios.get(`${config.baseUrl}/ask/1.json`);
// const fetchJobsList = () => axios.get(`${config.baseUrl}/jobs/1.json`);
const fetchUserInfo = (username) => axios.get(`${config.baseUrl}/user/${username}.json`);
const fetchItemInfo = (itemid) => axios.get(`${config.baseUrl}/item/${itemid}.json`);

export {
  // fetchNewsList,
  // fetchAskList,
  // fetchJobsList,
  fetchItemList,
  fetchUserInfo,
  fetchItemInfo,
};