import { BrowserModule, Title } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutModule } from "./layout";
import { CoreModule } from "./core";
import { SharedModule } from "./shared";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    CoreModule,
    SharedModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
