import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../../Services/payment/payment.service';


@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  payment : any;

  constructor(public activatedRoute: ActivatedRoute,private paymentService : PaymentService,private router: Router,) {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params.id) {
        this.paymentService.viewPayment(parseInt(params.id)).then(job => {
          this.payment = job;
          console.log(this.payment)
        }).catch((error) => {
          console.log(error);
          this.router.navigate(['/payments/payment_details']);
          // this.helper.errorMessage({}, "Payment Not Found. Please Try Again");
        });
      }
    })
   }

  ngOnInit(): void {
  }

}
