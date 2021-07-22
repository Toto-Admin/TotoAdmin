import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import {Router,ActivatedRoute} from '@angular/router';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
//import services
import { TaskService } from '../../Services/task/task.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {}; 
  dtTrigger: Subject<any> = new Subject();
  taskId :any;
  task :any;
  constructor(
    private activatedRoute:ActivatedRoute,      
    private router:Router, 
    private taskService:TaskService,
  ) {
        this.activatedRoute.params.subscribe((params: any) => {
        this.taskId = parseInt(params.id);
        if (params.id) {
          this.taskService.viewJob(this.taskId).then(job => {
            this.task = job?.schedule;
            this.dtTrigger.next();
            console.log(this.task); 
          }).catch((error) => {
            console.log(error);  //this.loading = false;
            this.router.navigate(['/jobs/task']);
            Swal.fire({
              icon: 'error',
              title: "Job Not Found. Please Try Again.", 
              text: `${error}`,
            }) 
          });
        }
      }) ;
   }
  formsErrors = [];
  ngOnInit(): void {
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:10,
      ordering : true,
      lengthMenu :[[10,25,50,100,-1],[10,25,50,100,'All']],
      columnDefs: [
        { orderable: false, targets: [-1,-2] }
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
