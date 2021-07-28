import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import {NgbNavChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import { ProviderService } from '../../Services/provider/provider.service';

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

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private router:Router,
    private providerService : ProviderService
    ) { }

  currentJustify = 'start';
  filterStatus = 'all';
  active=1;
  activeKeep=1;
  activeSelected=1;
  disabled = true;  
  tabs = [1, 2, 3, 4, 5,6];
  counter = this.tabs.length + 1;
  activeDynamic=1;
  formsErrors = [];

  ngOnInit(): void {
    $('#backButton').hide();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      ordering: false,
      serverSide: true,
      processing: true,
      lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, 'All']],
      ajax: (dataTablesParameters: any, callback : any) => {
        let page = dataTablesParameters.start / dataTablesParameters.length;
        
       this.providerService.getContractors({ page: page, limit: dataTablesParameters.length,status : this.filterStatus }).then((data: { meta: { total: any; }; data: any; }) => {
          console.log(data.data);
          callback({
            recordsTotal: data.meta.total,
            recordsFiltered: data.meta.total,
            data: data.data
          })
        })
      },
      columnDefs: [
        { orderable: false, targets: -1 },
        { className: "tdLeft", targets: [0,1, 2, 3, 4] },
        { className: "tdRight", targets: [] },
        { className: "tdCenter", targets:[6]}
      ],
      columns: [
        { data: 'first_name' },
        { data: 'email' },
        { data: 'phone' },
        {
          data: 'register_date',
          "render": function (data : any) {
            if(data == null)
            {
              return '-';
            }
            else
            {
              var date = new Date(data);
              var month = date.getMonth() + 1;
              return (month.toString().length > 1 ? month : "0" + month) + "/" + date.getDate() + "/" + date.getFullYear();
            }
          }
        },
        {
          data: 'last_login_at',
          "render": function (data : any) {
            if(data == null)
            {
              return '-';
            }
            else
            {
            var date = new Date(data);
            var month = date.getMonth() + 1;
            return (month.toString().length > 1 ? month : "0" + month) + "/" + date.getDate() + "/" + date.getFullYear();
            }
          }
        },
        {
          data: 'status',
          render: function (data : any) {
            if (data == 'active') {
              return '<label class="label label-success">Active</label>';
            }
            else if(data == 'on-boarding')
            {
              return '<label class="label label-info">On-boarding</label>';
            }
            else {
              return '<label class="label label-dark">Inactive</label>';
            }
          }
        },
        {
          data: 'id',
          render: function (data : any) {
            // return '<a [routerLink]="["/payment/details"]" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-eye"></i></a>';
            return '<a href="/provider/provider-view/'+data+'"><i class="ti-eye"></i></a>   <a href="/provider/add/'+data+'"><i class="ti-marker-alt"></i></a> <a href="/provider/edit/'+data+'"><i class="ti-trash"></i></a> <a href="/provider/edit/'+data+'"><i class="ti-na"></i></a>   <a href="/provider/edit/'+data+'"><i class="ti-face-sad"></i></a>'
          }
        }
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

  filterData(element : any)
  {
    this.filterStatus = element;
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }
}
