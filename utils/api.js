//Required import
const axios = require("axios")

//Make github axios call with arguments passed to username
const api = {
  getUser(username) {
   return axios.get(`https://api.github.com/users/${username}`)
  }
};

//Export module
module.exports = api;
