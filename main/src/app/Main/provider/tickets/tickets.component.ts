import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { element } from 'protractor';
import { Subject } from 'rxjs';
import { SupportService } from '../../Services/support.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent  {

  dtTrigger: Subject<any> = new Subject<any>();

  editTicket: FormGroup | null = null;
  totalTicket : any;
  pending :number = 0;
  open : number = 0;
  close : number = 0;
  ticketData : any;
  orignalTicketData : any;
  ticket = [];
  owner_contactid: any;
  custdata:any;
  cust: any;
  ProviderTickets = Array();
  constructor(private modalService: NgbModal,private support :SupportService) {

    this.support.getTicketData().subscribe(data =>{
      
      this.custdata=data;
      this.custdata.forEach((element:any)=>{
        if(element.owner_contactid =='6b6litzr')
        {
          var data : any = element;
          this.ProviderTickets.push(data)
        }
      });
        this.dtTrigger.next();
    })


  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
