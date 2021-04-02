import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  {path:'', component:DashboardComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'customer-list',component:CustomerListComponent}

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
