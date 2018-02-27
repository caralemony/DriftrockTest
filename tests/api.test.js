const test = require("tape");
const request = require("supertest")(
  "https://driftrock-dev-test.herokuapp.com"
);

test("tape is working", t => {
  t.equals(1, 1, "1 is equal to 1");
  t.end();
});

test("/users endpoint returns status 200", t => {
  request.get("/users").end((err, res) => {
    t.error(err);
    t.equals(res.status, 200, "should return 200");
    t.end();
  });
});

test("/purchases endpoint returns status 200", t => {
  request.get("/purchases").end((err, res) => {
    t.error(err);
    t.equals(res.status, 200, "should return 200");
    t.end();
  });
});

test("unknown endpoint returns status 404", t => {
  request.get("/random").end((err, res) => {
    t.error(err);
    t.equals(res.status, 404, "should return 404");
    t.end();
  });
});
