const mostSold = allSales => {
  let mergedArr = [].concat.apply([], allSales);
  let soldItems = [];
  let salesTally = {};
  mergedArr.forEach(sold => {
    soldItems.push(sold.item);
  });

  for (var i = 0; i < soldItems.length; i++) {
    let topSeller = Object.keys(salesTally)[0];

    if (typeof salesTally[soldItems[i]] == "undefined") {
      salesTally[soldItems[i]] = 1;
    } else {
      salesTally[soldItems[i]]++;
      if (salesTally[soldItems[i]] > Object.values(salesTally)[0]) {
        topSeller = soldItems[i];
      }
    }
    console.log(Object.values(salesTally)[topSeller]);
  }
};

module.exports = mostSold;
