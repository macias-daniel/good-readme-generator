// TODO: import axios module
const axios = require("axios")

// TODO: use dotenv module to get environmental variables if necessary

const api = {
  getUser(username) {
   return axios.get(`https://api.github.com/users/${username}`)
  }
};

module.exports = api;
