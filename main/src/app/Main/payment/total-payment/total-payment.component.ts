import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../../Services/payment/payment.service';

@Component({
  selector: 'app-total-payment',
  templateUrl: './total-payment.component.html',
  styleUrls: ['./total-payment.component.css']
})
export class TotalPaymentComponent implements OnInit {
  payment : any;
  paymentList : any;
  totalAmount : any;
  constructor(public activatedRoute: ActivatedRoute,private paymentService : PaymentService,private router: Router,) {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params.id) {
        this.paymentService.viewPayment(parseInt(params.id)).then(job => {
          this.payment = job;
          this.paymentList = this.payment.payment;
          this.totalAmount = this.payment.totalAmount;
          console.log(this.totalAmount)
          console.log(job.payment)
        }).catch((error) => {
          console.log(error);
          this.router.navigate(['/payments/payment_details']);
        });
      }
    })
   }

  ngOnInit(): void {
  }

}
