import { Express } from "express-serve-static-core";
import client from "./twitterClient";

const service = (app: Express) => {
  app.get("/api/twitter/:q", (req, res) => {
    const q: string = req.params.q;

    if (q.length > 500) {
      return res.status(400).send({ error: "max 500 characters" });
    }

    client
      .get("search/tweets", { q, count: 10 })
      .then((tweets: any) => {
        res.send({ tweets: tweets.statuses });
      })
      .catch((error: any) => {
        console.log(error);
        res.status(503).send();
      });
  });
};

export default service;
