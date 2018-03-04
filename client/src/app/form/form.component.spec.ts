import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";

import { TweetComponent } from "../wall/tweet/tweet.component";
import { TweetService } from "../services/tweet.service";
import { FormComponent } from "./form.component";

describe("FormComponent", () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(
    async(() => {
      const tweetService = jasmine.createSpyObj("TweetService", ["queryTweets"]);

      TestBed.configureTestingModule({
        providers: [{ provide: TweetService, useValue: tweetService }],
        declarations: [FormComponent, TweetComponent],
        imports: [ReactiveFormsModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should query tweets from TweetService on form submit", () => {
    fail("TODO");
  });

  it("should clear input field on form submit", () => {
    fail("TODO");
  });
});
