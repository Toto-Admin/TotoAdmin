import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { JobDashboardComponent } from './job-dashboard/job-dashboard.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { AgmCoreModule } from '@agm/core';
import { TaskComponent } from './task/task.component';
import { DataTablesModule } from 'angular-datatables';
import { JobDetailsComponent } from './job-details/job-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DocumentComponent } from './document/document.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskHistoryComponent } from './task-history/task-history.component';
import { PaymentComponent } from './payment/payment.component';
import { ActivityComponent } from './activity/activity.component';
import { UnhappywithproviderComponent } from './unhappywithprovider/unhappywithprovider.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ChatComponent } from './chat/chat.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceViewComponent } from './invoice-view/invoice-view.component';
import { SupportComponent } from './support/support.component';
import { ChattingComponent } from './chatting/chatting.component';
// import { NgxPrintModule} from 'ngx-print';

@NgModule({
  declarations: [JobDashboardComponent, TaskComponent, JobDetailsComponent, DocumentComponent, TaskDetailsComponent, TaskHistoryComponent, PaymentComponent, ActivityComponent, UnhappywithproviderComponent, ReviewsComponent, ChatComponent, InvoicesComponent, InvoiceViewComponent, SupportComponent, ChattingComponent],
  imports: [
    CommonModule,
    NgApexchartsModule,
    NgxChartsModule,
    JobsRoutingModule,
    ChartsModule,
    ChartistModule,
    AgmCoreModule,
    NgbModule,
    DataTablesModule,
    // NgxPrintModule
  ]
})
export class JobsModule { }
