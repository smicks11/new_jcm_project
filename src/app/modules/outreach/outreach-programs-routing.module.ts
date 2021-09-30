import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OutreachProgramsComponent } from "./pages/outreach-programs/outreach-programs.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: OutreachProgramsComponent,
        data: {
          title: 'Outreach'
        }
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutreachProgramsRoutingModule {}
