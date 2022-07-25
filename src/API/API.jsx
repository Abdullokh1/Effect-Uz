import axios from "axios";


const token = 'ogsj9obmqnI8ztN6T5c_GA-0BY4E2MEOd7qhPKGXIStoHD6a3E';

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

const LOGIN_URL = "https://simply.uz/api/login";
const CATEGORY_URL = "https://simply.uz/api/category";
const PROVENCE_URL = "https://simply.uz/api/provence";
const CONFIG_URL = "https://simply.uz/api/config";
const NEWS_ALL = "https://simply.uz/api/news-all";
const NEWS_ITEM_URL = "https://simply.uz/api/new?id";


const API = {

  login: () => axios.post(LOGIN_URL, params),

  category:() => axios.get(CATEGORY_URL, headers),

  provence: () => axios.get(PROVENCE_URL, headers),

  config: () => axios.get(CONFIG_URL, headers),

  newsAll: () => axios.get(NEWS_ALL, headers),

  newsItem: (ID) => axios.get(`${NEWS_ITEM_URL}=${ID}`, headers),

}



export default API