import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ArticleComponent } from "./article/article.component";
import { FlagArticleServiceService } from "./flagArticleService.service";

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent // <-- added this
  ],
  imports: [BrowserModule, FormsModule],
  providers: [FlagArticleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
