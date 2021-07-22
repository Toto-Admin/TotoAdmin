import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';
//import services
import { TaskService } from '../../Services/task/task.service';
import { PaymentService } from '../../Services/payment/payment.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task :any;
  paymentList :any;
  taskAttachment:any;
  taskId : any;
  lat: number = 0;
  lng: number = 0;
  constructor(
      private activatedRoute:ActivatedRoute,      
      private router:Router, 
      private taskService:TaskService,
      private paymentService:PaymentService,
           
      ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
        this.taskId = parseInt(params.id);
      if (params.id) {
       // this.loading = true;
        this.taskService.viewJob(this.taskId).then(job => {
         // this.loading = false;
          console.log(job); 
          this.task = job;
          this.getPaymentDetail(this.taskId);
          this.taskAttachment = this.task.attachments;
          // if (this.task.attachments.length > this.loadMoreLength) {
          //   this.loadMore = true;
          //   this.taskAttachment = this.job.attachments.slice(0, this.loadMoreLength);
          // } else {
          //   this.loadMore = false;
          // }

        }).catch((error) => {
          console.log(error);  //this.loading = false;
          this.router.navigate(['/jobs']);
          Swal.fire({
            icon: 'error',
            title: "Job Not Found. Please Try Again.", 
            text: `${error}`,
          }) 
        });
      }
    })
    this.getContractorLiveLocation(this.taskId);
    setInterval(() => {
        this.getContractorLiveLocation(this.taskId);
      }, 60000);

  }

  getContractorLiveLocation(id:any) {
    this.taskService
      .getContractorLiveLocation(id)
      .then(data => {
          this.lat = +data.data.lat;
          this.lng = +data.data.long;
          console.log("LAT LONG VALUE", this.lng, this.lat);
          
          })
      .catch(error => {
          Swal.fire({
            icon: 'error',
            title:  `Something went wrong.!`,
            text: `${error}`,
          });
      })

  }

  getPaymentDetail(id:any){
    this.paymentService.viewJobPayment(parseInt(id)).then(job => {
       //this.loading = false;
       this.paymentList = job;
 
     }).catch((error) => {
        console.log(error);
        // this.loading = false;
        this.router.navigate(['/payments']);
        Swal.fire({
          icon: 'error',
          title:  `Payment Not Found. Please Try Again`,
          text: `${error}`,
        });
     });
 }

}
 
