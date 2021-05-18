import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketComponent } from './ticket.component';

const routes: Routes = [
  {
    path : '',
    component: TicketComponent,
    data: {title: 'Tickets'}
  },
  {
    path : 'ticket/:id',
    component: TicketComponent,
    data: {title: 'Tickets'}
  },
  {
    path : 'ticket-details',
    component : TicketDetailsComponent,
    data: {title: 'Tickets'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
