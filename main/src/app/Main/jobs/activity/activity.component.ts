import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';
//import services
import { TaskService } from '../../Services/task/task.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  taskId :any;
  task :any;
  meta :any;
  constructor(
    private activatedRoute:ActivatedRoute,      
    private router:Router, 
    private taskService:TaskService,
  ) {
        this.activatedRoute.params.subscribe((params: any) => {
        this.taskId = parseInt(params.id);
        if (params.id) {
          this.taskService.getJobHistory(this.taskId).then(job => {
            
            this.task=job?.data,
            this.meta= { total: job.data.length } 
            console.log(this.task); 
          }).catch((error) => {
            console.log(error); 
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
