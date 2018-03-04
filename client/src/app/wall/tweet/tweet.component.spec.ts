import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TweetComponent } from "./tweet.component";
import Tweet from "../../models/Tweet";

const tweet: Tweet = {
  createdAt: new Date().toString(),
  displayName: "testName",
  favoriteCount: 0,
  imageUrl: "test.png",
  name: "test",
  retweetCount: 0,
  text: "test text",
  verified: false
};

describe("TweetComponent", () => {
  let component: TweetComponent;
  let fixture: ComponentFixture<TweetComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [TweetComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetComponent);
    component = fixture.componentInstance;
    component.tweet = tweet;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
