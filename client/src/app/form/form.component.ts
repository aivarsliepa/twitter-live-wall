import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TweetService } from "../services/tweet.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
    this.form = new FormGroup({
      query: new FormControl("", [Validators.required])
    });
  }

  search(): void {
    const { query } = this.form.controls;
    this.tweetService.queryTweets(query.value);
    query.setValue("");
  }
}
