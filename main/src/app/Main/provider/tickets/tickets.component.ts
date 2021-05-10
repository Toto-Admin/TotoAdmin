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
  constructor(private modalService: NgbModal,private support :SupportService) {
    //Get All Tickets
    // this.support.getTicketData().subscribe(data=>{
     
    //     // this.totalTicket = Object.keys(data).length;
    //     // this.ticketData = data;
    //     // this.orignalTicketData = data;
    //     // console.log(this.ticketData);
      
    //     this.ticketData.forEach((element: any) => {
    //       // if(element.status == 'R')
    //       // {
    //       //   this.close += 1;
    //       // }

    //       // if(element.status == 'A')
    //       // {
    //       //   this.open += 1;
    //       // }

    //       // if(element.status == 'T')
    //       // {
    //       //   this.pending += 1;
    //       // }
   
          
        
    //      });
         
        // this.dtTrigger.next();

    // })
    this.support.getTicketData().subscribe(data =>{
      //  this.totalTicket=Object.keys(data).length;
       
      //  this.orignalTicketData = data;
      
       this.custdata=data;
          console.log(this.custdata);
      
      this.custdata.forEach((element:any)=>{
        if( element.owner_contactid =='272y38qq')
          {
          
            console.log('in the loop');
           
          console.log(element.owner_contactid);
        
              
          }
      
      });
      // this.ticketData=this.owner_contactid;
        this.dtTrigger.next();
    })


  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
   //Filter Data tab wise
   filterData(ele :any ,)
   {
    debugger
    //  if(ele == 'close')
    //  {
    //    this.ticketData = this.orignalTicketData;
    //    this.ticketData = this.ticketData.filter((d: { status: string; }) => d.status === 'R');
    //  }
    //  else if(ele == 'open')
    //  {
    //    this.ticketData = this.orignalTicketData;
    //    this.ticketData = this.ticketData.filter((d: { status: string; }) => d.status === 'A');
    //  }
    //  else if(ele == 'pending')
    //  {
    //    this.ticketData = this.orignalTicketData;
    //    this.ticketData = this.ticketData.filter((d: { status: string; }) => d.status === 'T');
    //  }
    
    //  else
    //  {
    //    this.ticketData = this.orignalTicketData;
    //  }
   
   }
}
