import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';
//import services
import { TaskService } from '../../Services/task/task.service';
import { PaymentService } from '../../Services/payment/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  taskId :any;
  task :any;
  paymentList :any;
  constructor(
    private activatedRoute:ActivatedRoute,      
    private router:Router, 
    private taskService:TaskService,
    private paymentService:PaymentService,
  ) {
        this.activatedRoute.params.subscribe((params: any) => {
        this.taskId = parseInt(params.id);
        if (params.id) {
          this.taskService.viewJob(this.taskId).then(job => {
            this.task = job?.payment;
            this.getPaymentDetail(this.taskId);
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
  getPaymentDetail(id:any){
    this.paymentService.viewJobPayment(parseInt(id)).then(job => {
       this.paymentList = job;
       console.log(this.paymentList);
     }).catch((error) => {
       console.log(error);
       this.router.navigate(['/payments']);
       Swal.fire({
        icon: 'error',
        title: "Error", 
        text: "Payment Not Found. Please Try Again",
      });
     });
 }

}
