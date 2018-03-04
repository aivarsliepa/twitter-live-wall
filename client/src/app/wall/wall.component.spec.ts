import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

import { WallComponent } from "./wall.component";
import { TweetService } from "../services/tweet.service";
import { TweetComponent } from "./tweet/tweet.component";

describe("WallComponent", () => {
  let component: WallComponent;
  let fixture: ComponentFixture<WallComponent>;

  beforeEach(
    async(() => {
      const tweetService = jasmine.createSpyObj("TweetService", ["getTweets"]);
      // tweetService.getTweets.and.returnValue(Observable.from([]));

      TestBed.configureTestingModule({
        declarations: [WallComponent, TweetComponent],
        providers: [{ provide: TweetService, useValue: tweetService }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render the same amount of tweets as provided by TweetService", () => {
    fail("TODO");
  });
});
