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

const mostSold = result => {
  result.forEach(a => console.log(a.length));
  // result.forEach(data => console.log(data.item));
};

const userTotal = result => {
  let email = process.argv[3];
  result.data.filter(sales => {
    return Object.keys(sales).some(key => {
      console.log(sales[key] === email);
    });
  });
};

process.argv[2] === "most_sold" ? APICall("purchases", mostSold, 1, []) : "";
process.argv[2] === "total_spend" ? APICall("users", userTotal) : "";
