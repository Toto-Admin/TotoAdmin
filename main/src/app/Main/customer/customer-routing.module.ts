import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';

const routes: Routes = [

  {path:'', component:DashboardComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'customer-list',component:CustomerListComponent},
  {path:'view',component:CustomerViewComponent}

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
