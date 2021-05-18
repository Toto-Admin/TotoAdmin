import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import {NgbNavChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;
  config: any;
  // editUser: FormGroup | null = null;
  // userDetail: User | null = null;

  // filterArray: User[] | null = null;

  joiningDate: string | null = null;
  editUser: FormGroup | null = null;
  dtOptions: DataTables.Settings = {};

  constructor(private fb: FormBuilder,private modalService: NgbModal,private router:Router) { }

  currentJustify = 'start';

  active=1;

  activeKeep=1;

  activeSelected=1;
  disabled = true;

  
  tabs = [1, 2, 3, 4, 5,6];
  counter = this.tabs.length + 1;
  activeDynamic=1;

  formsErrors = [];
  ngOnInit(): void {
    $('#backButton').show();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:10,
      ordering : true,
      lengthMenu :[[10,25,50,100,-1],[10,25,50,100,'All']],
      columnDefs: [
        { orderable: false, targets: -1 }
     ]
    };
    this.editUser = this.fb.group({
      id: [''],
      Name: ['', Validators.required],
      Position: ['', Validators.required],
      Email: ['', Validators.required],
      Mobile: ['', Validators.required],
      DateOfJoining: ['', Validators.required],
      Salary: ['', Validators.required],
      Projects: ['', Validators.required],
  });
  }
  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.header()).on('keyup change', function () {
          debugger
          var data :any;
          data = $(this).val();
          if (that.search() !== data) {
            that
              .search(data)
              .draw();
          }
        });
      });
    });
  }

  openModal(targetModal: NgbModal) {
    this.modalService.open(targetModal, {
        centered: true,
        backdrop: 'static'
    });
  }
  closeBtnClick() {
    this.modalService.dismissAll();
    this.ngOnInit();
  }
  btnClick() 
  {
    this.router.navigate(['/provider/add']);
  }

  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 3) {
      changeEvent.preventDefault();
    }
  }
}
