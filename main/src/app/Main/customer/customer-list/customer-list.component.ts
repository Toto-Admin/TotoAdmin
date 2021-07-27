import { AfterViewInit, Component, OnInit, ViewChild, Renderer2, TemplateRef, ElementRef  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from '../../Services/customer/customer.service';
import { BlockReasonService } from '../../Services/mobile-apps/block-reason.service';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, AfterViewInit {
  @ViewChild('editUserModal') editUserModal!:ElementRef; // Note: TemplateRef
    @ViewChild(DataTableDirective, { static: false })

 // Note: TemplateRef

  datatableElement!: DataTableDirective;
  dtInstance!: Promise<DataTables.Api>;
  config: any;
  // editUser: FormGroup | null = null;
  userDetail: User | null = null;

  filterArray: User[] | null = null;

  joiningDate: string | null = null;
  editUser: FormGroup | null = null;
  // dtOptions: DataTables.Settings = {};
  dtOptions: any = {};
  buttons?: any[];

  currentJustify = 'start';
  active = 1;
  activeKeep = 1;

  activeSelected = 1;
  disabled = true;


  tabs = [1, 2, 3, 4, 5, 6];
  counter = this.tabs.length + 1;
  activeDynamic = 1;
  reasonList : any;
  title : any;

  constructor(private renderer: Renderer2,private fb: FormBuilder, private modalService: NgbModal, private router: Router, private customerServices: CustomerService, private cmsService : BlockReasonService) { 
    this.cmsService.getBlockReasons({page : 0,limit :100}).then(data=>{
      this.reasonList = data.data;
    })
  }
  formsErrors = [];
  ngOnInit(): void {
    $('#backButton').hide();
    this.editUser = this.fb.group({
      id: [''],
      blockReasonId: [''],
      type: ['']
    });

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      ordering: false,
      serverSide: true,
      processing: true,
      lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, 'All']],
      ajax: (dataTablesParameters: any, callback: any) => {
        let page = dataTablesParameters.start / dataTablesParameters.length;
        this.customerServices.getUsers({ page: page, limit: dataTablesParameters.length }).then(data => {
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
        { className: "tdLeft", targets: [0, 1, 2, 3, 4] },
        { className: "tdRight", targets: [] },
        { className: "tdCenter", targets: [6] }
      ],
      columns: [
        { data: 'first_name' },
        { data: 'email' },
        { data: 'phone' },
        {
          data: 'register_date',
          "render": function (data: any) {
            if (data == null) {
              return '-';
            }
            else {
              var date = new Date(data);
              var month = date.getMonth() + 1;
              return (month.toString().length > 1 ? month : "0" + month) + "/" + date.getDate() + "/" + date.getFullYear();
            }
          }
        },
        {
          data: 'last_login_at',
          "render": function (data: any) {
            if (data == null) {
              return '-';
            }
            else {
              var date = new Date(data);
              var month = date.getMonth() + 1;
              return (month.toString().length > 1 ? month : "0" + month) + "/" + date.getDate() + "/" + date.getFullYear();
            }
          }
        },
        {
          data: 'status',
          render: function (data: any) {
            if (data == 'active') {
              return '<label class="label label-success">Active</label>';
            }
            else if (data == 'on-boarding') {
              return '<label class="label label-info">On-boarding</label>';
            }
            else if(data == 'deleted'){
              return '<label class="label label-danger">Deleted</label>';
            }
            else if(data == 'block'){
              return '<label class="label label-warning">Blocked</label>';
            }
            else {
              return '<label class="label label-dark">Abusive</label>';
            }
          }
        },
        {
          data: 'id',
          render: function (data: any,type:any,row : any) {
            if(row.status == 'active'){
              return '<a href="/customer/view/'+ data +'"><i class="ti-eye"></i></a>   <a href="/customer/edit/' + data + '"><i class="ti-marker-alt"></i></a> <a href="javascript:void(0)" class="delete-customer"><i class="ti-trash" id="'+data+'"></i></a> <a href="javascript:void(0)"><i class="ti-na" id="'+data+'"></i></a>   <a href="javascript:void(0)"><i class="ti-face-sad" id="'+data+'"></i></a>'
            }else{
              return '<a href="/customer/view/'+ data +'"><i class="ti-eye"></i></a>   <a href="/customer/edit/' + data + '"><i class="ti-marker-alt"></i></a> <a href="javascript:void(0)" class="delete-customer"><i class="ti-trash" id="'+data+'"></i></a> <a href="javascript:void(0)"><i class="ti-check" id="'+data+'"></i></a>';
            }
            // return '<a [routerLink]="["/payment/details"]" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-eye"></i></a>';

            
          }
        }
      ]
    };

  }

  ngAfterViewInit(): void {
    this.renderer.listen('document', 'click', (event) => {
      if (event.target.className === "ti-trash") {
        debugger
        var id = event.target.id;
        this.title = 'Remove';
        this.modalService.open(this.editUserModal);
        this.editUser?.setValue({
          type: 'Remove',
          id: id,
          blockReasonId : 0
        })
      }
      if (event.target.className === "ti-na") {
        debugger
        var id = event.target.id;
        this.title = 'Block';
        this.modalService.open(this.editUserModal);
        this.editUser?.setValue({
          type: 'Block',
          id: id,
          blockReasonId : 0
        })
      }
      if (event.target.className === "ti-check") {
        debugger
        var id = event.target.id;
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be active customer!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, active it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.customerServices.activeUser(Number(id)).then((data) => {
              this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
                dtInstance.ajax.reload()
              });
            });
          }
        }).catch((error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `${error}`,
          }) 
        });
      }
      if (event.target.className === "ti-face-sad") {
        var id = event.target.id;
        Swal.fire({
          title: 'Are you sure?',
          text: "that you want to Abusive/Suspicious status to customer?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Abusive it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.customerServices.abusiveUser(Number(id)).then((data) => {
              this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
                dtInstance.ajax.reload()
              });
            });
          }
        }).catch((error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `${error}`,
          }) 
        });
      }
    });

    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.header()).on('keyup change',  () => {
          debugger
          var data: any;
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

  // openModal(template: any) {
  //   this.modalService.open(template);
  //  }
  openModal(targetModal: NgbModal) {
    debugger
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
  }
  closeBtnClick() {
    this.modalService.dismissAll();
    this.ngOnInit();
  }
  closeModel()
  {

  }

  btnClick() {
    this.router.navigate(['/customer/add']);
  }


  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 3) {
      changeEvent.preventDefault();
    }
  }

  onSubmit()
  {
    let request = this.editUser?.value
    let data ={
      'blockReasonId' : Number(request.blockReasonId),
      'id'            : Number(request.id),
      'type'          : request.type
    }
    this.modalService.dismissAll();
    this.customerServices.blockContractor(data).then((data) => {
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload()
      });
    })
  }
}


