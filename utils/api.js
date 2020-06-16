// Routing for axios
const axios = require("axios");
require("dotenv").config

// API call
const api = {
    getUser(username) {
        return axios
        .get(`https://api.github.com/users/${username}`)
        .catch(err => {
            console.log(`User not found`);
            process.exit(1);
        })
    }
  };
  
  module.exports = api; 