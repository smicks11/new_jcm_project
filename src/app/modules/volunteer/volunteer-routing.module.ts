import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VolunteerComponent } from "./pages/volunteer/volunteer.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: VolunteerComponent,
        data: {
          title: 'Volunteer'
        }
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolunteerRoutingModule {}
