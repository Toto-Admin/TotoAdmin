import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AvailabilityComponent } from './availability/availability.component';
import { ChatsComponent } from './chats/chats.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentComponent } from './document/document.component';
import { EditComponent } from './edit/edit.component';
import { PerformanceComponent } from './performance/performance.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderViewComponent } from './provider-view/provider-view.component';
import { ReviewRatingComponent } from './review-rating/review-rating.component';
import { TaskHistoryComponent } from './task-history/task-history.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [

  {path:'', component:DashboardComponent},
  {path:'dashboard', component:DashboardComponent ,data:{title : 'Dashboard'}},
  {path:'provider-list',component:ProviderListComponent,data:{title : 'Provider List'}},
  {path:'provider-view',component:ProviderViewComponent,data:{title : 'Provider Details'}},
  {path:'document', component:DocumentComponent,data:{title : 'Provider Details'}},
  {path:'availability',component:AvailabilityComponent },
  {path:'perform',component:PerformanceComponent,data:{title : 'Provider Details'}},
  {path:'task',component:TaskHistoryComponent,data:{title : 'Provider Details'}},
  {path:'review',component:ReviewRatingComponent,data:{title : 'Provider Details'}},
  {path:'availability', component:AvailabilityComponent,data:{title : 'Provider Details'}},
  {path:'add',component:AddComponent},
  {path:'tickets',component:TicketsComponent},
  {path:'chats',component:ChatsComponent},
  {path:'edit',component:EditComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
