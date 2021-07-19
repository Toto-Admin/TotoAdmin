import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CustomerService } from '../../Services/customer/customer.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.css']
})
export class JobHistoryComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;
  dtOptions : any = {};
  dtTrigger: Subject<any> = new Subject();


  jobList: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService : CustomerService) 
  { 
    this.activatedRoute.params.subscribe(params => {

      this.userService.viewUser(parseInt(params.id)).then(user => {
        this.jobList = user.seekerJobs;
        this.dtTrigger.next();
      })
    })
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      ordering: true,
      lengthMenu: [[5,10, 25, 50, 100, -1], [5,10, 25, 50, 100, 'All']],
      columnDefs: [
        { orderable: false, targets: -1 }
      ],
      
    };
  }

  // ngAfterViewInit(): void {
  //   this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //     dtInstance.columns().every(function () {
  //       const that = this;
  //       $('input', this.header()).on('keyup change', function () {
  //         debugger
  //         var data: any;
  //         data = $(this).val();
  //         if (that.search() !== data) {
  //           that
  //             .search(data)
  //             .draw();
  //         }
  //       });
  //     });
  //   });
  // }

}
