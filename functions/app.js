const mostSold = require("./mostSold");
const APICall = require("./APICall");
const userTotal = require("./userTotal");
const mostLoyal = require("./mostLoyal");

process.argv[2] === "most_sold"
  ? APICall("purchases", mostSold, 1, [], null)
  : process.argv[2] === "most_loyal"
    ? APICall("purchases", mostLoyal, 1, [], null)
    : "";
