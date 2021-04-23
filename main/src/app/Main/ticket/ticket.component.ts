import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  editTicket: FormGroup | null = null;

  constructor(private fb: FormBuilder,private modalService: NgbModal) { }

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

}
