import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: HomeComponent,
        data: {
          title: 'Home'
        }
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}