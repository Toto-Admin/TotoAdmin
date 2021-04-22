import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AvailabilityComponent } from './availability/availability.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentComponent } from './document/document.component';
import { PerformanceComponent } from './performance/performance.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderViewComponent } from './provider-view/provider-view.component';
import { ReviewRatingComponent } from './review-rating/review-rating.component';
import { TaskHistoryComponent } from './task-history/task-history.component';

const routes: Routes = [

  {path:'', component:DashboardComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'provider-list',component:ProviderListComponent},
  {path:'provider-view',component:ProviderViewComponent},
  {path:'document', component:DocumentComponent},
  {path:'availability',component:AvailabilityComponent },
  {path:'perform',component:PerformanceComponent},
  {path:'task',component:TaskHistoryComponent},
  {path:'review',component:ReviewRatingComponent},
  {path:'availability', component:AvailabilityComponent},
  {path:'add',component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
