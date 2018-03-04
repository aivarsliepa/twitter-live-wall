import { HttpClientModule } from "@angular/common/http";
import { TestBed, async } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";

import { TweetComponent } from "./wall/tweet/tweet.component";
import { TweetService } from "./services/tweet.service";
import { FormComponent } from "./form/form.component";
import { WallComponent } from "./wall/wall.component";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  beforeEach(
    async(() => {
      const tweetService = jasmine.createSpyObj("TweetService", ["getTweets"]);

      TestBed.configureTestingModule({
        declarations: [AppComponent, FormComponent, WallComponent, TweetComponent],
        imports: [ReactiveFormsModule, HttpClientModule],
        providers: [{ provide: TweetService, useValue: tweetService }],
      }).compileComponents();
    })
  );
  it(
    "should create the app",
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
});
