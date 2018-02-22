import socketIO from "socket.io";
import express from "express";
import http from "http";

import "./env";
import socketService from "./socketService";
import restService from "./restService";

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));
}

restService(app);

const server = http.createServer(app);
const io = socketIO(server);

socketService(io);

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`node listening on ${port}`));

export default server;
