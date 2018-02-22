import client from "./twitterClient";

interface TwitterEvent {
  query?: string;
}

const disconnect = (stream: any) => {
  if (stream) {
    stream.destroy();
  }
};

const service = (io: SocketIO.Server) => {
  io.on("connection", socket => {
    let stream: any;

    socket.on("stream", ({ query }: TwitterEvent) => {
      if (query) {
        disconnect(stream);
        stream = client.stream("statuses/filter", { track: query });

        stream.on("data", (tweet: any) => {
          socket.emit("tweet", tweet.text);
        });

        stream.on("error", (error: any) => console.log(error));
      }
    });

    socket.on("disconnect", () => {
      disconnect(stream);
    });
  });
};

export default service;
