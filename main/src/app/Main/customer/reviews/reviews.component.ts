import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CustomerService } from '../../Services/customer/customer.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { environment } from '../../../../environments/environment'

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;
  dtOptions : any = {};
  dtTrigger: Subject<any> = new Subject();
  reviewList: any;
  baseUrl = environment.baseUrl;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService : CustomerService) 
  { 
    this.activatedRoute.params.subscribe(params => {

      this.userService.getReviewRating(parseInt(params.id)).then(user => {
        this.reviewList = user;
        console.log(this.reviewList)
        // this.dtTrigger.next();
      })
    })
  }

  ngOnInit(): void {
  }

}
