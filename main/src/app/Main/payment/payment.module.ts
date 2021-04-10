import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaymentRoutingModule } from './payment-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TotalPaymentComponent } from './total-payment/total-payment.component';
import { DetailsComponent } from './details/details.component';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [DashboardComponent, PaymentDetailComponent, TaskDetailComponent, TotalPaymentComponent, 
    DetailsComponent, ReportComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    NgApexchartsModule,
    NgbModule
   

  ]
})
export class PaymentModule { }
