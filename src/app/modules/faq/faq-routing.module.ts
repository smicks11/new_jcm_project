import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FaqComponent } from "./pages/faq/faq.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: FaqComponent,
        data: {
          title: 'FAQ'
        }
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaqRoutingModule {}
