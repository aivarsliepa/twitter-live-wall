import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";

import { FormComponent } from "./form.component";
import { TweetService } from "../services/tweet.service";

describe("FormComponent", () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FormComponent],
        imports: [ReactiveFormsModule],
        providers: [TweetService]
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
});
