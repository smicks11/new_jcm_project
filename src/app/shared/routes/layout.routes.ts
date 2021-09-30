import { Routes } from "@angular/router";
import { AppRoutes } from "@app/core";

export const APP_ROUTES: Routes = [
  {
    path: AppRoutes.home,
    // data: { title: 'Home Title' },
    loadChildren: () =>
      import("../../modules/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: AppRoutes.outreachprograms,
    loadChildren: () =>
      import("../../modules/outreach/outreach-programs.module").then((m) => m.OutreachProgramsModule),
  },
  {
    path: AppRoutes.children,
    loadChildren: () =>
      import("../../modules/children/children.module").then((m) => m.ChildrenModule),
  },
  {
    path: AppRoutes.about,
    loadChildren: () =>
      import("../../modules/about/about.module").then((m) => m.AboutModule),
  },
  {
    path: AppRoutes.tenderlift,
    loadChildren: () =>
      import("../../modules/tender-lift/tender-lift.module").then(
        (m) => m.TenderLiftModule
      ),
  },
  {
    path: AppRoutes.volunteer,
    loadChildren: () =>
      import("../../modules/volunteer/volunteer.module").then(
        (m) => m.VolunteerModule
      ),
  },
  {
    path: AppRoutes.support,
    loadChildren: () =>
      import("../../modules/support/support.module").then(
        (m) => m.SupportModule
      ),
  },
  {
    path: AppRoutes.contact,
    loadChildren: () =>
      import("../../modules/contact/contact.module").then(
        (m) => m.ContactModule
      ),
  },
  {
    path: AppRoutes.faq,
    loadChildren: () =>
      import("../../modules/faq/faq.module").then((m) => m.FaqModule),
  },
];
