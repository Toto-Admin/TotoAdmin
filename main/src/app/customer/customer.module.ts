import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { JobHistoryComponent } from './job-history/job-history.component';
import { TicketHistoryComponent } from './ticket-history/ticket-history.component';


@NgModule({
  declarations: [JobHistoryComponent, TicketHistoryComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
