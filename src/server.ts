import express from "express";
const app = express();

import client from "./twitter";

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "client/dist"));
}

app.get("/api/twitter/:q", (req, res) => {
  const { q } = req.params;
  client.get("search/tweets", { q, count: 10 }, function(
    error: any,
    tweets: any,
    response: any
  ) {
    if (error) {
      res.send(error);
    }
    res.send(tweets);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`node listening on ${port}`));
