import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [

  {path:'services',component:ServicesComponent,data: {title: 'Services'}},
  {path:'categories',component:CategoriesComponent,data: {title: 'Category'}}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
