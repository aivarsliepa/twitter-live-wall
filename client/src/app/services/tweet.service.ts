import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

import Tweet from "../models/Tweet";

@Injectable()
export class TweetService {
  private apiUrl = "api/twitter";
  private tweets: Subject<Tweet[]> = new Subject();

  constructor(private http: HttpClient) { }

  getTweets(): Observable<Tweet[]> {
    return this.tweets;
  }

  queryTweets(query: string) {
    this.http.get<any>(`${this.apiUrl}/${query}`).subscribe(response => {
      const { tweets } = response;
      if (tweets) {
        const tweetsTrimmed: Tweet[] = tweets.map((tweet: any) => ({
          createdAt: tweet.created_at,
          retweetCount: tweet.retweet_count,
          favoriteCount: tweet.favorite_count,
          text: tweet.text,
          imageUrl: tweet.user.profile_image_url_https,
          displayName: tweet.user.name,
          name: tweet.user.screen_name,
          verified: tweet.user.verified
        }));
        this.tweets.next(tweetsTrimmed);
      }
    });
  }
}
