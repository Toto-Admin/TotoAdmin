import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-task-history',
  templateUrl: './task-history.component.html',
  styleUrls: ['./task-history.component.css']
})
export class TaskHistoryComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  constructor() { }
  formsErrors = [];
  ngOnInit(): void {
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:10,
      ordering : true,
      lengthMenu :[[10,25,50,100,-1],[10,25,50,100,'All']],
      columnDefs: [
        // { orderable: false, targets: [-1,-2] }
     ]
    };
   
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

}

