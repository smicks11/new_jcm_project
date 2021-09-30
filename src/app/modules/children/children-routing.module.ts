import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChildrenComponent } from "./pages/children/children.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ChildrenComponent,
        data: {
          title: 'Children'
        }
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildrenRoutingModule {}
