import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';
import { CustomerService } from '../../Services/customer/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  constructor(private router: Router,public activatedRoute: ActivatedRoute,private userService : CustomerService) { }

  dtOptions: DataTables.Settings = {};
  user: any = {};
  activeID : any;

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength : 5,
      lengthMenu : [5,15,25],
      processing : true
    };

    this.regularForm = new FormGroup({
      'id' : new FormControl(),
      'first_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]),
      'last_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      // 'password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]),
      // 'latitude':new FormControl(null,[Validators.required]),
      // 'longitude':new FormControl(null,[Validators.required]),
      // 'mobile':new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10) , Validators.pattern("^[0-9]*$")]),
      'address':new FormControl(null,[Validators.required]),
      'dob': new FormControl(null,[Validators.required]),
      'profile_pic':new FormControl(null),
      'gender': new FormControl()
  }, {updateOn: 'blur'});


  this.activatedRoute.params.subscribe((params: any) => {
    if (params.id) {
      this.activeID = params.id;
      this.userService.viewUser(parseInt(params.id)).then(user => {
        // if (user.status == 'active') {
        //   this.user.status = true;
        // } else if (user.status == 'inactive') {
        //   this.user.status = false;
        // }
        this.user.password = user.password;
        this.user.profile_pic = user.profile_pic;
        this.regularForm.patchValue({
          'id': user.id,
          'first_name': user.first_name,
          'last_name': user.last_name,
          'email': user.email,
          'dob': user.dob,
          'gender': (user.gender) ? user.gender : 'male',
          'address': user.address,
          'phone': user.phone,
          'status': user.status,
          'profile_pic': user.profile_pic,
        });

        this.user.profile_pic = user.profile_pic;
      }).catch((error) => {
        //this.helper.errorMessage({ message: error.message });
      });
    }
  })
  }

  setProfilePic($event : any) {
    if ($event.target.files.length > 0) {
      var fileToLoad = $event.target.files[0];
      var reader: FileReader = new FileReader();
      reader.onloadend = (readerEvt: any) => {
        this.user.profile_pic = readerEvt.target.result;
      }
      reader.readAsDataURL(fileToLoad);
    }
  }

  @ViewChild('f', {static:true}) floatingLabelForm: NgForm=Object.create(null);
  @ViewChild('vform', {static:true}) validationForm: FormGroup=Object.create(null);
  regularForm: FormGroup=Object.create(null);
  radioOptions = ['male', 'female'];

 

  onReactiveFormSubmit() {
    debugger
    // if (this.regularForm.invalid) {
    //   return;
    // } else {
      let request = this.regularForm.value;
      request.role_id = 2;
      if (this.regularForm.value.id) {
        request.id = parseInt(this.regularForm.value.id);
      }
      if (request.referral_code) {
        request.referral_code = request.referral_code.toString();
      }
      if (this.user.profile_pic) {
        request.profile_pic = this.user.profile_pic;
      }
      // if (request.status == true) {
      //   request.status = 'active';
      // } else if (request.status == false) {
      //   request.status = 'inactive';
      // }
      
      request.phone_verified = true;
      this.userService.addUser(request).then((data) => {
        // this.helper.successMessage({ message: data.message});
        Swal.fire(
          'Updated!',
          'Customer information has been updated.',
          'success'
        )        
        this.router.navigate(['/customer/view/'+this.activeID]);
      }).catch((error) => {
        // this.helper.errorMessage({ message: error.message });
      })
    // }
  }
  cancelBtnClick(){
    this.router.navigate(['/customer/customer-list'])
  }

}
