import { TestBed, inject } from "@angular/core/testing";

import { HttpClientModule } from "@angular/common/http";
import { TweetService } from "./tweet.service";

describe("TweetService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TweetService],
      imports: [HttpClientModule]
    });
  });

  it(
    "should be created",
    inject([TweetService], (service: TweetService) => {
      expect(service).toBeTruthy();
    })
  );
});
