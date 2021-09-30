import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { AppRoutes } from "./core";
import { LayoutComponent } from "./layout";
import { APP_ROUTES } from "./shared";

const routes: Routes = [
  {
    path: AppRoutes.home,
    component: LayoutComponent,
    children: APP_ROUTES,
  },
  { path: "**", redirectTo: AppRoutes.home },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      enableTracing: false,
      scrollPositionRestoration: "enabled",
      onSameUrlNavigation: "reload",
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: "legacy",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
