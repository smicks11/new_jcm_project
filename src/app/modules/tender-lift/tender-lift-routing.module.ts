import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TenderLiftComponent } from "./pages/tender-lift/tender-lift.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: TenderLiftComponent,
        data: {
          title: 'TenderLift'
        }
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenderLiftRoutingModule {}
