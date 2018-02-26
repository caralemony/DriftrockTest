const fetch = require("node-fetch");

const APICall = (arg, callback) => {
  let page = 1;
  let results = "";
  fetch(
    `https://driftrock-dev-test.herokuapp.com/${arg}?page=${page}&per_page=100`
  )
    .then(res => res.json())
    .then(res => {
      APIres = Array.from(res.data);
      if (APIres.length !== 100) {
        console.log("end");
        return;
      } else if (APIres.length === 100) {
        ++page;
        console.log(page);
        console.log(APIres[0]);
        APICall(arg, callback);
      }
    });
};

const mostSold = result => {
  result.data.forEach(data => console.log(data.item));
};

const userTotal = result => {
  let email = process.argv[3];
  result.data.filter(sales => {
    return Object.keys(sales).some(key => {
      console.log(sales[key] === email);
    });
  });
};

process.argv[2] === "most_sold" ? APICall("purchases", mostSold) : "";
process.argv[2] === "total_spend" ? APICall("users", userTotal) : "";
