import { TestBed, async } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FormComponent } from "./form/form.component";
import { WallComponent } from "./wall/wall.component";

describe("AppComponent", () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent, FormComponent, WallComponent],
        imports: [ReactiveFormsModule]
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
