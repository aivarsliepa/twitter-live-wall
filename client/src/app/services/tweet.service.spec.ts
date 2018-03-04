import { TestBed, inject } from "@angular/core/testing";

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TweetService } from "./tweet.service";

describe("TweetService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TweetService],
      imports: [HttpClientTestingModule]
    });
  });

  it(
    "should be created",
    inject([TweetService], (service: TweetService) => {
      expect(service).toBeTruthy();
    })
  );

  describe("queryTweets(query)", () => {
    it(
      "should pass fetched tweets to getTweets() Observable",
      inject([TweetService], (service: TweetService) => {
        fail("TODO");
      })
    );
    it(
      "should emit received query for stream event",
      inject([TweetService], (service: TweetService) => {
        fail("TODO");
      })
    );
  });

  it(
    "should add newly received tweets at the start of array, while not changing it's length",
    inject([TweetService], (service: TweetService) => {
      fail("TODO");
    })
  );
});
