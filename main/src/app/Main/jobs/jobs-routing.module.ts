import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDashboardComponent} from './job-dashboard/job-dashboard.component'
const routes: Routes = [
  {path:'', component:JobDashboardComponent},
  {path:'dashboard', component:JobDashboardComponent,data: {
    title: 'Dashboard',
    urls: [
      { title: 'Jobs', url: '/jobs/dashboard' },
    ]
  }},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
