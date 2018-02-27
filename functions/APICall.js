const fetch = require("node-fetch");

const APICall = (option, callback, page, results, data) => {
  fetch(
    `https://driftrock-dev-test.herokuapp.com/${option}?page=${page}&per_page=100`
  )
    .then(res => res.json())
    .then(res => {
      APIres = res.data;
      if (APIres.length === 100) {
        results.push(APIres);
        page++;
        APICall(option, callback, page, results, data);
      } else if (APIres.length !== 100) {
        results.push(APIres);
        callback(results, data);
      }
    });
};

module.exports = APICall;
