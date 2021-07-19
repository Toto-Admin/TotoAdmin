import { Component, OnInit } from '@angular/core';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { PaymentService } from '../../Services/payment/payment.service';
@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor(private payementService: PaymentService) { }
  currentJustify = 'start';

  active = 1;

  activeKeep = 1;

  activeSelected = 1;
  disabled = true;


  tabs = [1, 2, 3, 4, 5, 6];
  counter = this.tabs.length + 1;
  activeDynamic = 1;
  ngOnInit(): void {
    $('#backButton').hide();
    ///// Datatale error message disable for use below /////
    $.fn.dataTable.ext.errMode = 'none';
   ////////////////////////////////////////////////////////////
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      ordering: false,
      serverSide: true,
      processing: true,
      lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, 'All']],
      ajax: (dataTablesParameters: any, callback) => {
        let page = dataTablesParameters.start / dataTablesParameters.length;
        this.payementService.getAllPayments({ page: page, limit: dataTablesParameters.length }).then(data => {
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
        { className: "tdLeft", targets: [1, 2, 3, 4] },
        { className: "tdRight", targets: [0, 6] }
      ],
      columns: [
        { data: 'jobId' },
        { data: 'job.service.name' },
        { data: 'job.user.first_name' },
        { data: 'job.provider.first_name' },
        {
          data: 'created_at',
          "render": function (data) {
            var date = new Date(data);
            var month = date.getMonth() + 1;
            return (month.toString().length > 1 ? month : "0" + month) + "/" + date.getDate() + "/" + date.getFullYear();
          }
        },
        { data: 'description' },
        {
          data: 'amount',
          render: function (data) {
            return '<i class="mdi mdi-currency-gbp"></i>' + data;
          }
        },
        {
          data: 'job.title',
          render: function (data) {
            if (data == 'On-site') {
              return '<label class="label label-success">On-site</label>';
            }
            else {
              return '<label class="label label-dark">' + data + '</label>';
            }
          }
        },
        {
          data: 'job.status',
          render: function (data) {
            if (data == 'cancelled') {
              return '<label class="label label-danger">' + data + '</label>';
            }
            else if (data == 'done') {
              return '<label class="label label-success">' + data + '</label>';
            }
            else if (data == 'publish') {
              return '<label class="label label-info">' + data + '</label>';
            }
            else if (data == 'dispute') {
              return '<label class="label label-warning">' + data + '</label>';
            }
            else {
              return '<label class="label label-dark">' + data + '</label>';
            }
          }
        },
        {
          data: 'id',
          render: function (data) {
            // return '<a [routerLink]="["/payment/details"]" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-eye"></i></a>';
            return '<a href="/payment/details/'+data+'"><i class="ti-eye"></i></a>'
          }
        }
      ]
    };
  }
  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 3) {
      changeEvent.preventDefault();
    }
  }
}
