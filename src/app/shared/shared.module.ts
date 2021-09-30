import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AboutInnerContentComponent,
  OutreachProgramsComponent,
  AboutSectionComponent,
  BreadcrumbComponent,
  CarouselComponent,
  ContactSectionComponent,
  CountsSectionComponent,
  DetailsSectionComponent,
  FaqSectionComponent,
  GallerySectionComponent,
  PreLoaderComponent,
  SupportContentComponent,
  TeamSectionComponent,
  TenderLiftContentComponent,
  TestimonialSectionComponent,
  VolunteerContentComponent,
  ChildrenComponent,
} from "./components";


@NgModule({
  declarations: [
    AboutInnerContentComponent,
    AboutSectionComponent,
    BreadcrumbComponent,
    CarouselComponent,
    ContactSectionComponent,
    CountsSectionComponent,
    DetailsSectionComponent,
    FaqSectionComponent,
    GallerySectionComponent,
    PreLoaderComponent,
    SupportContentComponent,
    TeamSectionComponent,
    TenderLiftContentComponent,
    TestimonialSectionComponent,
    VolunteerContentComponent,
    OutreachProgramsComponent,
    ChildrenComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    AboutInnerContentComponent,
    AboutSectionComponent,
    BreadcrumbComponent,
    CarouselComponent,
    ContactSectionComponent,
    CountsSectionComponent,
    DetailsSectionComponent,
    FaqSectionComponent,
    GallerySectionComponent,
    PreLoaderComponent,
    SupportContentComponent,
    TeamSectionComponent,
    TenderLiftContentComponent,
    TestimonialSectionComponent,
    VolunteerContentComponent,
    OutreachProgramsComponent,
    ChildrenComponent
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
