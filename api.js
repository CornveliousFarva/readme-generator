// my github api key: 3a60031328deefa35189089ddad489362c4bb01c

const api = {
    getUser(username) {
        fetch(application/vnd.github.v3+json)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson)
        });
    }
  };
  
  module.exports = api;