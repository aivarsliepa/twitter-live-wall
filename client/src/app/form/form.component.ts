import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TweetService } from "../services/tweet.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  query: FormControl;

  constructor(private tweetService: TweetService) {}

  ngOnInit() {
    this.query = new FormControl();
  }

  search(): void {
    this.tweetService.queryTweets(this.query.value);
    this.query.setValue("");
  }
}
