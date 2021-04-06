import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProviderListComponent } from './provider-list/provider-list.component';

const routes: Routes = [

  {path:'', component:DashboardComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'provider-list',component:ProviderListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
