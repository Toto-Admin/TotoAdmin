import { Component, OnInit, ViewChild } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
//import services
import { TaskService } from '../../Services/task/task.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
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
            this.task = job?.attachments;
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
 

  ngOnInit(): void {
  }

}
