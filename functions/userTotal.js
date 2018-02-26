const userTotal = result => {
  let email = process.argv[3];
  result.data.filter(sales => {
    return Object.keys(sales).some(key => {
      console.log(sales[key] === email);
    });
  });
};

module.exports = userTotal;
