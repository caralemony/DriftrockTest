const mostSold = require("./mostSold");
const APICall = require("./APICall");
const mostLoyal = require("./mostLoyal");

if (process.argv[2] === "most_sold") {
  APICall("purchases", mostSold, 1, []);
} else if (process.argv[2] === "most_loyal") {
  APICall("purchases", mostLoyal, 1, []);
}
