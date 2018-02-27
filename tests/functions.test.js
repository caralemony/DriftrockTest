const test = require("tape");
const mostSold = require("../functions/mostSold");
const mostLoyal = require("../functions/mostLoyal");
const sales = require("./mockSales");

test("tape is working here too", t => {
  t.equals(1, 1, "1 is equal to 1");
  t.end();
});

test("mostSold function returns Incredible Silk Bottle", t => {
  t.equals(
    mostSold(sales),
    "Incredible Silk Bottle",
    "should return Incredible Silk Bottle"
  );
  t.end();
});

test("mostSold function returns Incredible Silk Bottle", t => {
  t.equals(
    mostLoyal(sales),
    "RZLF-C7JM-5D3F-FA7L",
    "should return RZLF-C7JM-5D3F-FA7L"
  );
  t.end();
});
