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
import { ActivatedRoute } from '@angular/router';


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


  currentJustify = 'start';

  active=1;

  activeKeep=1;

  activeSelected=1;
  disabled = true;

  
  tabs = [1, 2, 3, 4, 5];
  counter = this.tabs.length + 1;
  activeDynamic=1;
  private readonly notifier: NotifierService;

  constructor(private fb: FormBuilder,private modalService: NgbModal,private support :SupportService,
    private _clipboardService: ClipboardService,notifier: NotifierService,private activatedRoute: ActivatedRoute) { 
    this.notifier = notifier;
        //Get All Tickets 
        this.support.getTicketData().subscribe(data=>{
          this.totalTicket = Object.keys(data).length;;
          this.ticketData = data;
          this.orignalTicketData = data;
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
              //tabs
          this.activatedRoute.params.subscribe(params => {
            this.active         = Number(params['id']);
            this.activeKeep     = Number(params['id']);
            this.activeSelected = Number(params['id']);
            this.disabled       = true;

            if(this.active == NaN)
            {
                this.active         = 1;
                this.activeKeep     = 1;
                this.activeSelected = 1;
                this.activeDynamic  = 1;
            }
            this.tabs = [1, 2, 3, 4];
            this.counter = this.tabs.length + 1;
            if(params['id'] == 2)
            {
                this.filterData('pending');
            }
            else if(params['id'] == 3)
            {
                this.filterData('open');
            }
            else if(params['id'] == 4)
            {
                this.filterData('close');
            }
          })
          this.dtTrigger.next();
      })
  }

  

  ngOnInit(): void {
    $('#backButton').hide();

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
    var text = `Ticket Data below
    ticket id : `+id+`
    subject   : `+subject+`
    code      : `+ code+`
    date      : `+date+`
    customer  : `+customer+`
    job id    : #job123`  ;
    this._clipboardService.copy(text);
    this.notifier.notify('success', code +' copy');
  }
}
