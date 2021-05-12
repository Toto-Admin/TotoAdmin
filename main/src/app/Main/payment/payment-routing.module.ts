import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { ReportComponent } from './report/report.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TotalPaymentComponent } from './total-payment/total-payment.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,data: {title: 'Payment Dashboard'}},
  {path:'payment-detail', component:PaymentDetailComponent,data: {title: 'Payment Details'}},
  {path:'task-detail',component:TaskDetailComponent},
  {path:'total-payment',component:TotalPaymentComponent},
  {path:'details', component:DetailsComponent,data: {title: 'Payment Details'}},
  {path:'report',component:ReportComponent},
  {path:'invoice-details',component:InvoiceDetailsComponent,data: {title: 'Invoice Details'}}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
