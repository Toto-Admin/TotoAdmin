import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ChattingComponent } from './chatting/chatting.component';
import { InvoiceViewComponent } from './invoice-view/invoice-view.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { JobDashboardComponent} from './job-dashboard/job-dashboard.component'
import { JobDetailsComponent } from './job-details/job-details.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SupportComponent } from './support/support.component';
import { TaskComponent } from './task/task.component';
import { UnhappywithproviderComponent } from './unhappywithprovider/unhappywithprovider.component';
const routes: Routes = [
  {path:'', component:JobDashboardComponent},
  {
    path:'dashboard', component:JobDashboardComponent
    ,data: {title: 'Job Dashboard'}
  },
  {
    path:'task', component:TaskComponent,
    data: {title: 'Task Management'}
  },
  {
    path:'jobview', component:JobDetailsComponent,
    data: {title: 'Job Details'}
  },
  {
    path:'unhappycustomer', component:UnhappywithproviderComponent,
    data: {title: 'Unhappy with provider'}
  },
  {path:'reviews',component:ReviewsComponent},
  {path:'chat',component:ChatComponent},
  {path:'invoice',component:InvoicesComponent},
  {path:'invoice-view',component:InvoiceViewComponent,data: {title: 'Invoice Details'} },
  {path:'chatting',component:ChattingComponent},
  {path:'support',component:SupportComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
