import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { element } from 'protractor';
import { Subject } from 'rxjs';
import { SupportService } from '../../Services/support.service';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent  {

  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;
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
      //  this.totalTicket=Object.keys(data).length;
       //  this.orignalTicketData = data;
       this.cust=data;
       this.custdata=this.cust;
      
      this.custdata=data;
      this.custdata.forEach((element:any)=>{
        if(element.owner_contactid =='pd1h6y03')
        {
          var data : any = element;
          this.ProviderTickets.push(data)
        }
        
        if( element.owner_contactid =='272y38qq')
          {
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
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      ordering: true,
      lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, 'All']],
      columnDefs: [
        { orderable: false, targets: -1 }
      ]
    };
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
