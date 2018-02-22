import socketIO from "socket.io-client";

import "../src/server";

export const URL = "http://localhost:3000";
export const socketOptions = {
  reconnectionDelay: 0,
  forceNew: true
};

describe("socketService", () => {
  let socket: SocketIOClient.Socket;

  beforeEach(done => {
    socket = socketIO.connect(URL, socketOptions);

    socket.on("connect", () => {
      done();
    });
  });

  it(
    "should give me some tweet, when correct query",
    done => {
      const query = "stream";

      socket.on("tweet", (text: any) => {
        expect(text).toBeTruthy();
        done();
      });

      socket.emit("stream", { query });
    },
    10000 /* to reduce flakiness of test */
  );

  afterEach(done => {
    if (socket.connected) {
      socket.disconnect();
    }
    done();
  });
});
