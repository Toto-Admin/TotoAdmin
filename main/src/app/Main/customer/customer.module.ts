import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CustomerRoutingModule } from './customer-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';
// import 
import { NgApexchartsModule } from "ng-apexcharts";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { ReactiveFormsModule} from '@angular/forms';
import { JobHistoryComponent } from './job-history/job-history.component';
import { TicketHistoryComponent } from './ticket-history/ticket-history.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ActivityComponent } from './activity/activity.component'

@NgModule({
  declarations: [DashboardComponent, CustomerListComponent, CustomerAddComponent, CustomerEditComponent, CustomerViewComponent, JobHistoryComponent, TicketHistoryComponent, PaymentHistoryComponent, ReviewsComponent, ActivityComponent],
  imports: [
    CommonModule,
    AgmCoreModule,
    NgbModule,
    CustomerRoutingModule,
    PerfectScrollbarModule,
    CustomerRoutingModule,
    DataTablesModule,
    ReactiveFormsModule,
    NgApexchartsModule,
  
  ]
})
export class CustomerModule { }
