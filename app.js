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

const mostSold = allSales => {
  let mergedArr = [].concat.apply([], allSales);
  let soldItems = [];
  let salesTally = {};
  mergedArr.forEach(sold => {
    soldItems.push(sold.item);
  });

  for (var i = 0; i < soldItems.length; i++) {
    if (typeof salesTally[soldItems[i]] == "undefined") {
      salesTally[soldItems[i]] = 1;
    } else {
      salesTally[soldItems[i]]++;
    }
    console.log(salesTally);
  }
};

const userTotal = result => {
  let email = process.argv[3];
  result.data.filter(sales => {
    return Object.keys(sales).some(key => {
      console.log(sales[key] === email);
    });
  });
};

process.argv[2] === "most_sold"
  ? APICall("purchases", mostSold, 1, [])
  : process.argv[2] === "total_spend" ? APICall("users", userTotal) : "";
