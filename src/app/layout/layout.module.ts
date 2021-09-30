import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  BackToTopComponent,
  FooterComponent,
  HeaderComponent,
  LayoutComponent,
} from "./components";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    BackToTopComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    BackToTopComponent,
  ],
})
export class LayoutModule {}
