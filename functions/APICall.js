const fetch = require("node-fetch");

const APICall = (option, callback, page, results) => {
  fetch(
    `https://driftrock-dev-test.herokuapp.com/${option}?page=${page}&per_page=100`
  )
    .then(res => res.json())
    .then(res => {
      APIres = res.data;
      if (APIres.length === 100) {
        results.push(APIres);
        page++;
        APICall(option, callback, page, results);
      } else if (APIres.length !== 100) {
        results.push(APIres);
        callback(results);
      }
    });
};

module.exports = APICall;
