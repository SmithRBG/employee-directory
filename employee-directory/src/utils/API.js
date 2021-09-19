import axios from "axios";
const APIURL = "https://randomuser.me/api/?results=50";


export default {
  search: function() {
    return axios.get(APIURL)
  }
};

//Make sure the URL at the top is the correct link. You are requesting mulitple users...also make sure axios is installed.