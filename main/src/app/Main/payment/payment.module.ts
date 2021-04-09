import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [DashboardComponent, PaymentDetailComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    NgApexchartsModule
  ]
})
export class PaymentModule { }
