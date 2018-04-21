import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from "./list/list.component";
import { CreateComponent } from "./create/create.component";
import { EditComponent } from "./edit/edit.component";
import { ViewComponent } from "./view/view.component";


const routes: Routes = [
	{path:"",pathMatch:"full",component:ListComponent},
	{path:"new",component:CreateComponent},
	{path:"edit/:id",component:EditComponent},
	{path:"details/:id",component:ViewComponent},
	{path:"**",component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
