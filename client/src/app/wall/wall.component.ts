import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { TweetService } from "../services/tweet.service";

import Tweet from "../models/Tweet";

@Component({
  selector: "app-wall",
  templateUrl: "./wall.component.html",
  styleUrls: ["./wall.component.css"]
})
export class WallComponent implements OnInit {
  tweets: Observable<Tweet[]>;

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
    this.tweets = this.tweetService.getTweets();
  }
}
