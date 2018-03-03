import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WallComponent } from "./wall/wall.component";
import { TweetComponent } from "./wall/tweet/tweet.component";
import { FormComponent } from "./form/form.component";
import { TweetService } from "./services/tweet.service";

@NgModule({
  declarations: [AppComponent, WallComponent, TweetComponent, FormComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [TweetService],
  bootstrap: [AppComponent]
})
export class AppModule {}
