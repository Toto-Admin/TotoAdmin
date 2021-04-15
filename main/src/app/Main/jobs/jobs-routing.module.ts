import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDashboardComponent} from './job-dashboard/job-dashboard.component'
import { JobDetailsComponent } from './job-details/job-details.component';
import { TaskComponent } from './task/task.component';
import { UnhappywithproviderComponent } from './unhappywithprovider/unhappywithprovider.component';
const routes: Routes = [
  {path:'', component:JobDashboardComponent},
  {
    path:'dashboard', component:JobDashboardComponent,
    data: {
      title: 'Dashboard',
      urls: [
        { title: 'Jobs', url: '/jobs/dashboard' },
      ]
    }
  },
  {
    path:'task', component:TaskComponent,
    // data: {
    //   title: 'Task Details',
    //   urls: [
    //     { title: 'Task', url: '/jobs/task' },
    //   ]
    // }
  },
  {
    path:'jobview', component:JobDetailsComponent,
    // data: {
    //   title: 'Task Details',
    //   urls: [
    //     { title: 'Task', url: '/jobs/jobview' },
    //   ]
    // }
  },
  {
    path:'unhappycustomer', component:UnhappywithproviderComponent,
    // data: {
    //   title: 'Unhappy with Customer',
    //   urls: [
    //     { title: 'Task', url: '/jobs/unhappycustomer' },
    //   ]
    // }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
