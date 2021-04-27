import { NgModule } from '@angular/core';
import { CommonModule,DatePipe } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketComponent } from './ticket.component';
// import { TicketService } from './tickets.service';
import { DataTablesModule } from 'angular-datatables';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [TicketComponent, TicketDetailsComponent],
  imports: [
    CommonModule,
    TicketRoutingModule,
    DataTablesModule,
    QuillModule.forRoot(),
  ],
  providers:[
    // TicketService,
    DatePipe
  ]
})
export class TicketModule { }
