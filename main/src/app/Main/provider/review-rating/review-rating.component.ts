import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from '../../Services/provider/provider.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-review-rating',
  templateUrl: './review-rating.component.html',
  styleUrls: ['./review-rating.component.css']
})
export class ReviewRatingComponent implements OnInit {
  ratingReview : any;
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;

  constructor(private activatedRoute: ActivatedRoute, private providerServices: ProviderService) {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params.id) {
        this.providerServices.getReviewRating(parseInt(params.id)).then(data => {
          this.ratingReview = data;
          console.log(this.ratingReview)
        }).catch((error) => {
          //  this.helper.errorMessage({ message: error.message });
        });
      }
    })
  }

  ngOnInit(): void {
  }

}
