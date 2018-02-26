const mostSold = require("./mostSold");
const APICall = require("./APICall");
const userTotal = require("./userTotal");

process.argv[2] === "most_sold"
  ? APICall("purchases", mostSold, 1, [])
  : process.argv[2] === "total_spend" ? APICall("users", userTotal) : "";
