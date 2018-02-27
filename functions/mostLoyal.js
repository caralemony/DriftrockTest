const APICall = require("./APICall");

const mostLoyal = allSales => {
  let mergedArr = [].concat.apply([], allSales);
  let soldItems = [];
  let salesTally = {};

  mergedArr.forEach(sold => {
    soldItems.push(sold.user_id);
  });

  // checks if sold item is already in salesTally object. If not, adds it and gives it a value of one, else increments value
  for (var i = 0; i < soldItems.length; i++) {
    if (!salesTally[soldItems[i]]) {
      salesTally[soldItems[i]] = 1;
    } else {
      salesTally[soldItems[i]]++;
    }
  }

  let user = Object.keys(salesTally).reduce(function(a, b) {
    return salesTally[a] > salesTally[b] ? a : b;
  });
  console.log(user);
  return user;
};

module.exports = mostLoyal;
