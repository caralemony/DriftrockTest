const mostSold = allSales => {
  let mergedArr = [].concat.apply([], allSales);

  let soldItems = [];
  let salesTally = {};
  mergedArr.forEach(sold => {
    soldItems.push(sold.item);
  });

  for (var i = 0; i < soldItems.length; i++) {
    if (!salesTally[soldItems[i]]) {
      salesTally[soldItems[i]] = 1;
    } else {
      salesTally[soldItems[i]]++;
    }
  }

  let topSeller = Object.keys(salesTally).reduce(function(a, b) {
    return salesTally[a] > salesTally[b] ? a : b;
  });
  return topSeller;
  console.log(topSeller, salesTally[topSeller], "sold");
};

module.exports = mostSold;
