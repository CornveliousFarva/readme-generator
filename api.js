//API key for GitHub: 0f8c05ce2d791cd6454275fda76a1c3c10ee3190
const axios = require("axios");

const api = {
    getUser(username) {
        axios
        .get(`https://api.github.com/users/${username}`)
        .then((response) => {
            console.log(response.data.avatar_url);
            console.log(respons.email);
        })
        .then((myJson) => {
            console.log(myJson)
        });
    }
  };
  
  module.exports = api; 