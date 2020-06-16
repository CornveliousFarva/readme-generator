//API key for GitHub: 0f8c05ce2d791cd6454275fda76a1c3c10ee3190
const axios = require("axios");

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