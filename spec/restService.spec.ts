import request from "supertest";

import server from "../src/server";

// current version of jasmine does not fail test if 'done' is called with an error
const customDone = (done: DoneFn) => (err: any) => {
  if (err) {
    fail(err);
  }
  done();
};

describe("GET /api/twitter/:q", () => {
  it("should return some tweets when correct input", done => {
    request(server)
      .get("/api/twitter/twitter")
      .expect(200)
      .expect((res: any) => expect(res.body.tweets).toBeTruthy())
      .end(customDone(done));
  });

  it("should return error when query is more than 500 chars", done => {
    const query = "a".repeat(501);
    request(server)
      .get(`/api/twitter/${query}`)
      .expect(400)
      .expect((res: any) => expect(res.body.error).toBeTruthy())
      .end(customDone(done));
  });
});
