import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupportService } from '../Services/support.service';
import { number } from 'ngx-custom-validators/src/app/number/validator';
import { Subject } from 'rxjs';
import { NgbNavChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import { ClipboardService } from 'ngx-clipboard';
import { NotifierService } from 'angular-notifier';
// import { ToastrService } from 'ngx-toastr';
import { Target } from 'angular-feather/icons';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  editTicket: FormGroup | null = null;
  totalTicket : any;
  pending :number = 0;
  open : number = 0;
  close : number = 0;
  ticketData : any;
  orignalTicketData : any;
  ticket = [];

  private readonly notifier: NotifierService;

  constructor(private fb: FormBuilder,private modalService: NgbModal,private support :SupportService,private _clipboardService: ClipboardService,notifier: NotifierService) { 
    this.notifier = notifier;

    //Get All Tickets 
    this.support.getTicketData().subscribe(data=>{
        this.totalTicket = Object.keys(data).length;;
        this.ticketData = data;
        this.orignalTicketData = data;
        console.log(this.ticketData);
        this.ticketData.forEach((element: any) => {
          if(element.status == 'R')  
          {
            this.close += 1;
          }

          if(element.status == 'A')
          {
            this.open += 1;
          }

          if(element.status == 'T')
          {
            this.pending += 1;
          }
          
        });
        this.dtTrigger.next();

    })
  }

  currentJustify = 'start';

  active=1;

  activeKeep=1;

  activeSelected=1;
  disabled = true;

  
  tabs = [1, 2, 3, 4, 5];
  counter = this.tabs.length + 1;
  activeDynamic=1;

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:10,
      ordering : true,
      lengthMenu :[[10,25,50,100,-1],[10,25,50,100,'All']],
      columnDefs: [
        { orderable: false, targets: -1 }
     ]
    };

    this.editTicket = this.fb.group({
      Id: [''],
      Status: ['', Validators.required],
      ticketTitle: ['', Validators.required],
      ticketDescription: ['', Validators.required],
      AgentName: ['', Validators.required],
      Date: [''],

    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  openModal(targetModal: NgbModal, user: null) {
    this.modalService.open(targetModal, {
        centered: true,
        backdrop: 'static'
    });
  }

  closeBtnClick() {
    this.modalService.dismissAll();
    this.ngOnInit();
  }


  onNavChange(changeEvent: NgbNavChangeEvent) {
    debugger
    if (changeEvent.nextId === 3) {
      changeEvent.preventDefault();
    }
  }

  //Filter Data tab wise
  filterData(ele :any)
  {
    debugger
    if(ele == 'close')
    {
      this.ticketData = this.orignalTicketData;
      this.ticketData = this.ticketData.filter((d: { status: string; }) => d.status === 'R');
    }
    else if(ele == 'open')
    {
      this.ticketData = this.orignalTicketData;
      this.ticketData = this.ticketData.filter((d: { status: string; }) => d.status === 'A');
    }
    else if(ele == 'pending')
    {
      this.ticketData = this.orignalTicketData;
      this.ticketData = this.ticketData.filter((d: { status: string; }) => d.status === 'T');
    }
    else
    {
      this.ticketData = this.orignalTicketData;
    }
  }

  copyInputMessage(id : any,subject :any,code : any,date : any,customer:any)
  {
    debugger

    var text = `Ticket Data below
    ticket id : `+id+`
    subject   : `+subject+`
    code      : `+ code+`
    date      : `+date+`
    customer  : `+customer+`
    job id    : #job123`  ;
    this._clipboardService.copy(text);
    // this.toastr.success('Copy successfully', code);

    this.notifier.notify('success', code +' copy');


  }

  // trclick(id :any)
  // {
  //   window.open('https://ajit.ladesk.com/agent/#Conversation;id='+id,"_blank")
  // }


}
