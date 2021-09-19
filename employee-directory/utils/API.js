import axios from "axios";
const APIURL = "https://randomuser.me/api/";
//const APIKEY = "&apikey=trilogy";

export default {
  search: function(query) {
    return axios.get(APIURL + query); // + APIKEY
  }
};


//Random User API????