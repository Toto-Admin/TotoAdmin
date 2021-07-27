import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { element } from 'protractor';
import { Subject } from 'rxjs';
import { SupportService } from '../../Services/support.service';

@Component({
  selector: 'app-ticket-history',
  templateUrl: './ticket-history.component.html',
  styleUrls: ['./ticket-history.component.css']
})
export class TicketHistoryComponent implements OnInit {

  dtTrigger: Subject<any> = new Subject<any>();

  // editTicket: FormGroup | null = null;
  totalTicket: any;
  pending: number = 0;
  open: number = 0;
  close: number = 0;
  ticketData: any;
  orignalTicketData: any;
  ticket = [];
  owner_contactid: any;
  custdata: any;
  cust: any;
  ProviderTickets = Array();

  constructor(private modalService: NgbModal, private support: SupportService) {
    this.support.getTicketData().subscribe(data => {
      //  this.totalTicket=Object.keys(data).length;
      //  this.orignalTicketData = data;
      this.cust = data;
      this.custdata = this.cust;
      console.log(this.custdata);

      this.custdata = data;
      this.custdata.forEach((element: any) => {
        if (element.owner_contactid == 'pd1h6y03') {
          var data: any = element;
          this.ProviderTickets.push(data)
        }

        if (element.owner_contactid == '272y38qq') {
          console.log('in the loop');

          console.log(element.owner_contactid);


        }

      });
      this.dtTrigger.next();
    })
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  ngOnInit(): void {
  }

}
