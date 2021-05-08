import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'',component:ListComponent},
  {path:'add',component:AddComponent,data: {title: 'Add Assessment'}},
  {path:'edit',component:EditComponent,data: {title: 'Edit Assessment'}},
  {path:'list',component:ListComponent,data: {title: 'Assessment List'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssessmentRoutingModule { }
