import { NgModule } from '@angular/core';
import { CommonModule,DatePipe } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketComponent } from './ticket.component';
// import { TicketService } from './tickets.service';
import { DataTablesModule } from 'angular-datatables';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { QuillModule } from 'ngx-quill';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { NotifierModule, NotifierOptions, NotifierService } from 'angular-notifier';

@NgModule({
  declarations: [TicketComponent, TicketDetailsComponent],
  imports: [
    CommonModule,
    TicketRoutingModule,
    DataTablesModule,
    ClipboardModule,
    QuillModule.forRoot(),
    NgbModule,
    NotifierModule.withConfig({
      position :{
        horizontal :{
          position : 'right'
        }
      }
    }),
  ],
  providers:[
    // TicketService,
    DatePipe,
    NotifierService
  ]
})
export class TicketModule { }
