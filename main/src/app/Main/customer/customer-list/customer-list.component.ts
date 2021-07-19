import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from '../../Services/customer/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;
  config: any;
  // editUser: FormGroup | null = null;
  userDetail: User | null = null;

  filterArray: User[] | null = null;

  joiningDate: string | null = null;
  editUser: FormGroup | null = null;
  // dtOptions: DataTables.Settings = {};
  dtOptions : any = {};
  buttons?: any[];

  currentJustify = 'start';

  active = 1;

  activeKeep = 1;

  activeSelected = 1;
  disabled = true;


  tabs = [1, 2, 3, 4, 5, 6];
  counter = this.tabs.length + 1;
  activeDynamic = 1;

  constructor(private fb: FormBuilder, private modalService: NgbModal, private router: Router,private customerServices : CustomerService) { }
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
        this.customerServices.getUsers({ page: page, limit: dataTablesParameters.length }).then(data => {
          console.log(dataTablesParameters);
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
            var date = new Date(data);
            var month = date.getMonth() + 1;
            return (month.toString().length > 1 ? month : "0" + month) + "/" + date.getDate() + "/" + date.getFullYear();
          }
        },
        {
          data: 'last_login_at',
          "render": function (data : any) {
            var date = new Date(data);
            var month = date.getMonth() + 1;
            return (month.toString().length > 1 ? month : "0" + month) + "/" + date.getDate() + "/" + date.getFullYear();
          }
        },
        {
          data: 'status',
          render: function (data : any) {
            if (data == 'active') {
              return '<label class="label label-success">Active</label>';
            }
            else if(data == 'On-boarding')
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
            return '<a href="/customer/view/'+data+'"><i class="ti-eye"></i></a>   <a href="/customer/view/'+data+'"><i class="ti-marker-alt"></i></a> <a href="/customer/view/'+data+'"><i class="ti-trash"></i></a> <a href="/customer/view/'+data+'"><i class="ti-na"></i></a>   <a href="/customer/view/'+data+'"><i class="ti-face-sad"></i></a>'
          }
        }
      ]
    };

  }
  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.header()).on('keyup change', function () {
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

  openModal(targetModal: NgbModal, user: User | null) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
  }
  closeBtnClick() {
    this.modalService.dismissAll();
    this.ngOnInit();
  }

  btnClick() {
    this.router.navigate(['/customer/add']);
  }


  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 3) {
      changeEvent.preventDefault();
    }
  }

  excel()
  {
    debugger
    $('.buttons-excel').addClass('waves-effect waves-light btn');
    $(".buttons-excel").trigger("click");
  }
}
