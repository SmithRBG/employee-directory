import axios from "axios";
const APIURL = "https://randomuser.me/api/?results=50";


export default {
  search: function() {
    return axios.get(APIURL)
  }
};

