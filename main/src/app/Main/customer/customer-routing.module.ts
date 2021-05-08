import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

const routes: Routes = [

  {path:'', component:DashboardComponent,data: {title: 'Customer Dashboard'}},
  {path:'dashboard', component:DashboardComponent,data: {title: 'Customer Dashboard'}},
  {path:'customer-list',component:CustomerListComponent,data: {title: 'Customer List'}},
  {path:'view',component:CustomerViewComponent,data: {title: 'Customer Details'}},
  {path: 'add',component:CustomerAddComponent,data: {title: 'Customer Add'}},
  {path:'edit',component: CustomerEditComponent,data: {title: 'Customer Edit'}}

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
