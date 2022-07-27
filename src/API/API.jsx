import axios from "axios";


const token = '434gW_nyNC_BsHlO3HO8OQP9aoFBNSY0rLCG602CEgWpz271Dk';

const headers = {
   headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
   }
}

const params = {
   usename: 'api',
   password: 'apiapiapi'
}

// GET 

const LOGIN_URL = "https://simply.uz/api/login";
const CATEGORY_URL = "https://simply.uz/api/category";
const PROVENCE_URL = "https://simply.uz/api/provence";
const CONFIG_URL = "https://simply.uz/api/config";
const NEWS_ALL = "https://simply.uz/api/news-all";
const NEWS_ITEM_URL = "https://simply.uz/api/new?id";

// POST 

const NEWS_END = "https://simply.uz/api/news-end?count";
const COME_URL = "https://simply.uz/api/come";
const COMMENT_URL = "https://simply.uz/api/comment";
const ADVERT_URL = "https://simply.uz/api/advert";
const RECEPTIONS_URL = "https://simply.uz/api/reception";
const STAR_URL = "https://simply.uz/api/star";






const API = {

  login: () => axios.post(LOGIN_URL, params),

  category:() => axios.get(CATEGORY_URL, headers),

  provence: () => axios.get(PROVENCE_URL, headers),

  config: () => axios.get(CONFIG_URL, headers),

  newsAll: () => axios.get(NEWS_ALL, headers),

  newsItem: (ID) => axios.get(`${NEWS_ITEM_URL}=${ID}`, headers),

  newsEnd: (params) => axios.post(`${NEWS_END}`, params, headers),


}



export default API