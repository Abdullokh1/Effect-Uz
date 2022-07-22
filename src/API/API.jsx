import axios from "axios";


const header = {
   header: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + token
   }
}


const LOGIN_URL = "https://simply.uz/api/login";
const CATEGORY_URL = "https://simply.uz/api/category"
const NEWS_END = "https://simply.uz/api/news-end?count";

const API = {

   login: (params) => {
      axios.post(LOGIN_URL, params)
   },

   category: async (params) => {
      try {
         const response = await axios.get(CATEGORY_URL)
         return response
      } catch (err) {
         console.log(err);
      }
   },

   newsEnd: async (COUNT) => {
      try {
         axios.post(`${NEWS_END}=${COUNT}`, header)
      } catch (err) { console.log(err); }
   }



}



export default API