import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from '../../Services/task/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  constructor(private taskServices:TaskService) { }
  currentJustify = 'start';

  active=1;

  activeKeep=1;

  activeSelected=1; 
  disabled = true;

  
  tabs = [1, 2, 3, 4, 5];
  counter = this.tabs.length + 1;
  activeDynamic=1;


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
        this.taskServices.getJobs({ page: page, limit: dataTablesParameters.length }).then(data => {
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
        { data: 'id' },
        { data: 'service.name',"defaultContent": " " },
        { data: 'user.first_name' ,"defaultContent": " "},
        { data: 'provider.first_name',"defaultContent": " "},
        { data: 'type' },
        { data: 'status' },
        { data: 'updated_at', 
                "render": function (data : any) {
                var date = new Date(data);
                var month = date.getMonth() + 1;
                return (month.toString().length > 1 ? month : "0" + month) + "/" + date.getDate() + "/" + date.getFullYear();
              } 
        },
        {
          data: 'id',
          render: function (data : any) {
            //return '<a [routerLink]="["/payment/details"]" class="text-inverse p-r-10" data-toggle="tooltip" title="View"><i class="ti-eye"></i></a>'; <a href="/customer/view/'+data+'"><i class="ti-marker-alt"></i></a> <a href="/customer/view/'+data+'"><i class="ti-trash"></i></a>
            return '<a href="/jobs/jobview/'+data+'"><i class="ti-eye"></i></a>   '
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

  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 3) {
      changeEvent.preventDefault();
    }
  }

}
