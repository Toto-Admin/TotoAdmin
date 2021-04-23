import { NgModule } from '@angular/core';
import { CommonModule,DatePipe } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketComponent } from './ticket.component';
// import { TicketService } from './tickets.service';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [TicketComponent],
  imports: [
    CommonModule,
    TicketRoutingModule,
    DataTablesModule
  ],
  providers:[
    // TicketService,
    DatePipe
  ]
})
export class TicketModule { }
