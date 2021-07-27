import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../Services/customer/customer.service';
import {NgbNavChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import { param } from 'jquery';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  @ViewChild('map4', { static: true }) map4: any = Object.create(null);

  lat = -34.397;
  lng = 150.644;
  latA = -34.754764;
  lngA = 149.736246;
  zoom = 8;
  icon = {
    url: 'assets/images/users/5.jpg',
    scaledSize: { width: 45, height: 45, anchor: { x: 19, y: 19 } }, labelOrigin: { x: 12, y: 27 }
  }
  img1 = "assets/images/users/5.jpg";
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
  active=1;

  activeKeep=1;

  activeSelected=1;
  disabled = true;

  
  tabs = [1, 2, 3, 4, 5];
  counter = this.tabs.length + 1;
  activeDynamic=1;



  config: any;
  // editUser: FormGroup | null = null;
  userDetail: User | null = null;

  filterArray: User[] | null = null;
  profile_file: any;

  joiningDate: string | null = null;
  editUser: FormGroup | null = null;
  formsErrors = [];
  user : any;
  profile_file_exist: boolean | undefined;
  ratingReview: any;
  userSaleAmount: any;
  userBookedSession: any;
  activeID : any;
  constructor(private fb: FormBuilder, private modalService: NgbModal, private router: Router, private activatedRoute: ActivatedRoute, private userService : CustomerService) {
    this.activatedRoute.params.subscribe(params => {
      this.activeID = params.id;
      this.userService.viewUser(parseInt(params.id)).then(user => {
        this.user = user;
        this.lat =  Number(this.user.lat);
        this.lng =  Number(this.user.long);
        this.latA =  Number(this.user.lat);
        this.lngA =  Number(this.user.lngA);

        console.log(this.user)
        if (this.user.profile_pic) {
          this.profile_file = this.user.profile_pic;
        }
        else {
          this.profile_file = 'assets/images/users/1.jpg';
        }
        
        // let data = _.map(user.preference, function (element) {
        //   let event = {};
        //   event['title'] = element.timeSlots.name;
        //   event['date'] = element.date;
        //   return event;
        // });
        // this.calendarEvents = this.calendarEvents.concat(data);
      }).catch((error) => {
        this.router.navigate(['/customers']);
        // this.helper.errorMessage({ message: error.message });
      });

      this.userService.getUserBookedSession(parseInt(params.id)).then(count => {
        this.userBookedSession = count;
      }).catch((error) => {
          // this.helper.errorMessage({ message: error.message });
      });

      this.userService.getUserSaleAmount(parseInt(params.id)).then(count => {
          this.userSaleAmount = count;
      }).catch((error) => {
          // this.helper.errorMessage({ message: error.message });
      });

      this.userService.getReviewRating(parseInt(params.id)).then(data => {
          this.ratingReview = data;
      }).catch((error) => {
          //this.helper.errorMessage({ message: error.message });
      });
    })
  }

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
    this.router.navigate(['/customer/edit/'+this.activeID]);
  }
}
