import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/throttleTime";
import * as io from "socket.io-client";

import Tweet from "../models/Tweet";

@Injectable()
export class TweetService {
  private apiUrl = "api/twitter";
  private tweetsBuffer: Tweet[];
  private tweets: Subject<Tweet[]> = new Subject();
  private socket: SocketIOClient.Socket;

  constructor(private http: HttpClient) {
    this.socket = io();
    Observable
      .fromEvent(this.socket, "tweet")
      .throttleTime(2000)
      .subscribe(
        (tweet: any) => {
          this.tweetsBuffer.pop();
          this.tweetsBuffer.unshift(this.rawTweetToSanitized(tweet));
          this.tweets.next(this.tweetsBuffer);
        }
      );
  }

  getTweets(): Observable<Tweet[]> {
    return this.tweets;
  }

  queryTweets(query: string) {
    this.http.get<any>(`${this.apiUrl}/${query}`)
      .subscribe(response => {
        const { tweets } = response;
        if (tweets) {
          this.tweetsBuffer = tweets.map(this.rawTweetToSanitized);
          this.tweets.next(this.tweetsBuffer);
          this.emitStream(query);
        }
      });
  }

  emitStream(query: string) {
    this.socket.emit("stream", { query });
  }

  rawTweetToSanitized(tweet: any): Tweet {
    return {
      createdAt: tweet.created_at,
      retweetCount: tweet.retweet_count,
      favoriteCount: tweet.favorite_count,
      text: tweet.text,
      imageUrl: tweet.user.profile_image_url_https,
      displayName: tweet.user.name,
      name: tweet.user.screen_name,
      verified: tweet.user.verified
    };
  }
}
