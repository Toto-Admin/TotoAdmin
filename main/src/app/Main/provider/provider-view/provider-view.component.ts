import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from '../../Services/provider/provider.service';
import { AnyNsRecord } from 'dns';


@Component({
  selector: 'app-provider-view',
  templateUrl: './provider-view.component.html',
  styleUrls: ['./provider-view.component.css']
})
export class ProviderViewComponent implements OnInit {

  @ViewChild('map4', { static: true }) map4: any = Object.create(null);


  lat = -34.397;
  lng = 150.644;
  latA = -34.754764;
  lngA = 149.736246;
  zoom = 8;

  styles: any = [
    {
      featureType: 'all',
      stylers: [
        {
          saturation: -80
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        {
          hue: '#00ffee'
        },
        {
          saturation: 50
        }
      ]
    },
    {
      featureType: 'poi.business',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    }
  ];


  currentJustify = 'start';

  active = 1;

  activeKeep = 1;

  activeSelected = 1;
  disabled = true;


  tabs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  counter = this.tabs.length + 1;
  activeDynamic = 1;
  user_id: any;
  contractor: any;
  profile_file: any;
  calendarEvents: any;
  helper: any;
  assignJobCount: any;
  contractorRevenue: any;
  ratingReview: any;
  assestmentsService: any;
  user_result: any;
  success_percentage: any;
  failure_percentage: any;
  success_subtitle: any;
  failure_subtitle: any;
  is_exam: boolean = false;

  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 3) {
      changeEvent.preventDefault();
    }
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
    if (this.disabled) {
      this.activeSelected = 1;
    }
  }


  close(event: MouseEvent, toRemove: number) {
    this.tabs = this.tabs.filter(id => id !== toRemove);
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  add(event: MouseEvent) {
    this.tabs.push(this.counter++);
    event.preventDefault();
  }

  config: any;
  // editUser: FormGroup | null = null;
  userDetail: User | null = null;

  filterArray: User[] | null = null;

  joiningDate: string | null = null;
  editUser: FormGroup | null = null;
  formsErrors = [];
  constructor(private fb: FormBuilder, private modalService: NgbModal, private router: Router, private activatedRoute: ActivatedRoute, private contractorService: ProviderService) {

    // this.activatedRoute.params.subscribe(params => {
    //   debugger
    //   this.active = Number(params['id']);
    //   this.activeKeep = Number(params['id']);
    //   this.activeSelected = Number(params['id']);
    //   this.disabled = true;


    //   this.tabs = [1, 2, 3, 4, 5, 6, 8, 9];
    //   this.counter = this.tabs.length + 1;
    //   this.activeDynamic = Number(params['id']);
    // })

    this.activatedRoute.params.subscribe((params: any) => {
      if (params.id) {

        this.user_id = params.id;

        this.contractorService.viewContractor(parseInt(params.id)).then(contractor => {
          this.contractor = contractor;
          this.lat =  Number(this.contractor.lat);
          this.lng =  Number(this.contractor.long);
          this.latA =  Number(this.contractor.lat);
          this.lngA =  Number(this.contractor.long);
          console.log(this.contractor);
          if (this.contractor.profile_pic) {
            this.profile_file = this.contractor.profile_pic;
          }
          else {
            this.profile_file = 'assets/images/users/1.jpg';
          }

          // let data = _.map(contractor.preference, function (element) {
          //    let event = {};
          //     event['title'] = element.timeSlots.name;
          //     event['start'] = moment(element.date).format('YYYY-MM-DD')+' '+element.timeSlots.start_time;
          //    // event['end'] = moment(element.date).format('YYYY-MM-DD')+' '+element.timeSlots.end_time;
          //     return event;
          // });
          // this.calendarEvents = this.calendarEvents.concat(data);
        }).catch((error) => {
          this.router.navigate(['/contractors']);
          this.helper.errorMessage({}, 'Contractor Not Found. Please Try Again');
        });

        this.contractorService.getContractorAssignJob(parseInt(params.id)).then(count => {
          this.assignJobCount = count;
        }).catch((error) => {
          // this.helper.errorMessage({ message: error.message });
        });

        this.contractorService.getContractorRevenue(parseInt(params.id)).then(count => {
          this.contractorRevenue = count;
        }).catch((error) => {
          // this.helper.errorMessage({ message: error.message });
        });

        this.contractorService.getReviewRating(parseInt(params.id)).then(data => {
          this.ratingReview = data;
        }).catch((error) => {
          //  this.helper.errorMessage({ message: error.message });
        });

        this.assestmentsService.fetchUserMatrix(parseInt(params.id)).then((data: any) => {
          this.user_result = data.data;
          console.log(this.user_result);
          this.success_percentage = this.user_result.percentage;
          this.failure_percentage = 100 - this.user_result.percentage;
          this.success_subtitle = this.user_result.right_ans + ' of ' + this.user_result.total_que + ' answers';
          this.failure_subtitle = (this.user_result.total_que - this.user_result.right_ans) + ' of ' + this.user_result.total_que + ' answers';
        }).catch((error: any) => {
          this.is_exam = false;
          // this.helper.errorMessage({ message: error.message });
        });

      }
    });

  }

  ngOnInit(): void {
    $('#backButton').show();

    this.editUser = this.fb.group({
      id: [''],
      Name: ['', Validators.required],
      Position: ['', Validators.required],
      Email: ['', Validators.required],
      Mobile: ['', Validators.required],
      DateOfJoining: ['', Validators.required],
      Salary: ['', Validators.required],
      Projects: ['', Validators.required],
    });
  }


  openModal(targetModal: NgbModal, user: User | null) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
  }
  closeBtnClick() {
    this.modalService.dismissAll();
    this.ngOnInit();
  }

  btnClick() {
    this.router.navigate(['/provider/edit']);
  }
}
