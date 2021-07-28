import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
//import services
import { ProviderService } from '../../Services/provider/provider.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  btnTitle = "Save";
  titleDisplay = "Add";
  provider: any = {};
  @ViewChild('f', { static: true }) floatingLabelForm: NgForm = Object.create(null);
  @ViewChild('vform', { static: true }) validationForm: FormGroup = Object.create(null);
  regularForm: FormGroup = Object.create(null);
  radioOptions = ['male', 'female'];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private providerService: ProviderService
  ) { }

  ngOnInit(): void {
    $('#backButton').show();

    this.regularForm = new FormGroup({
      id: new FormControl(''),
      first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]),
      last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      dob: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      address: new FormControl(''),
      phone: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),
      status: new FormControl(null, [Validators.required]),
      serviceId: new FormControl(null, [Validators.required]),
      vatNum: new FormControl(''),
      vatName: new FormControl(''),
      profile_pic: new FormControl(''),
      insurance_file: new FormControl(''),
      preference: new FormControl(''),
    }, { updateOn: 'blur' });

    this.activatedRoute.params.subscribe((params: any) => {
      if (params.id) {
        this.providerService
          .viewContractor(parseInt(params.id))
          .then(contractor => {
            console.log("Data");
            console.log(contractor);
            // Set Title
            this.titleDisplay = 'Edit';
            this.btnTitle = 'Update';
            this.regularForm.patchValue({
              id: contractor.id,
              first_name: contractor.first_name,
              last_name: contractor.last_name,
              email: contractor.email,
              password: contractor.password,
              dob: contractor.dob,
              gender: contractor.gender,
              address: contractor.address,
              phone: contractor.phone,
              serviceId: contractor.serviceId,
              status: contractor.status,
              vatNum: contractor.vatNum,
              vatName: contractor.vatName,
              profile_pic: contractor.profile_pic,
              preference: contractor.preference,
            });
            this.provider.profile_pic = contractor.profile_pic;
            this.regularForm.controls['last_name'].setValidators(
              [],
            );
            this.regularForm.controls[
              'last_name'
            ].updateValueAndValidity();
            this.regularForm.controls['password'].setValidators(
              [],
            );
            this.regularForm.controls[
              'password'
            ].updateValueAndValidity();
            this.regularForm.controls['phone'].setValidators([]);
            this.regularForm.controls[
              'phone'
            ].updateValueAndValidity();

          })
          .catch(error => {
            // Swal.fire({
            //   icon: 'error',
            //   title: 'Error',
            //   text: `Error`,
            // }) 
          });
      }
    });
  }

  setProfilePic($event: any) {
    if ($event.target.files.length > 0) {
      var fileToLoad = $event.target.files[0];
      var reader: FileReader = new FileReader();
      reader.onloadend = (readerEvt: any) => {
        this.provider.profile_pic = readerEvt.target.result;
      }
      reader.readAsDataURL(fileToLoad);
    }
  }

  setInsurance($event: any) {
    if ($event.target.files.length > 0) {
      var fileToLoad = $event.target.files[0];
      var reader: FileReader = new FileReader();
      reader.onloadend = (readerEvt: any) => {
        this.provider.insurance_file = readerEvt.target.result;
      };
      reader.readAsDataURL(fileToLoad);
    }
  }
  onReactiveFormSubmit() {
    //  console.log(this.regularForm.value);
    console.log(this.regularForm.value);
    console.log(this.regularForm.value.first_name);
    //    if (this.regularForm.invalid) {
    //     return;
    // } else {
    let request : any;
    request.first_name = this.regularForm.value.first_name;
    request.last_name = this.regularForm.value.last_name;
    request.email = this.regularForm.value.email;
    request.password = this.regularForm.value.password;
    request.dob = this.regularForm.value.dob;
    request.gender = this.regularForm.value.gender;
    request.address = this.regularForm.value.address;
    request.phone = this.regularForm.value.phone;
    request.status = this.regularForm.value.status;
    request.serviceId = this.regularForm.value.serviceId;
    request.status = this.regularForm.value.status;
    request.vatNum = this.regularForm.value.vatNum;
    request.vatName = this.regularForm.value.vatName;
    request.insurance_file = this.regularForm.value.insurance_file;
    request.profile_pic = this.regularForm.value.profile_pic;
    request.preference = this.regularForm.value.preference;
    request.role_id = 3;
    request.saveType = 'admin';
    if (this.regularForm.value.id) {
      request.id = parseInt(this.regularForm.value.id);
    }

    // if (request.id) {
    //     request.isIssueRaised = this.issueRaised;
    //     request.isRattingNegative = this.reviewRaised;
    // }

    // if (request.referral_code) {
    //     request.referral_code = request.referral_code.toString();
    // }

    if (this.provider.insurance_file) {
      request.insurance_file = this.provider.insurance_file;
    }
    if (this.provider.profile_pic) {
      request.profile_pic = this.provider.profile_pic;
    }
    let checkDuplicatePreference = request.preference;
    console.log('preference---->', checkDuplicatePreference);
    // checkDuplicatePreference = checkDuplicatePreference.filter(
    //     (thing, index, self) =>
    //         index ===
    //         self.findIndex(
    //             t =>
    //                 t.timeSloteId === thing.timeSloteId &&
    //                 new Date(t.date).getTime() ===
    //                     new Date(thing.date).getTime(),
    //         ),
    // );
    console.log('checkDuplicatePreference', checkDuplicatePreference);
    request.preference = checkDuplicatePreference;
    console.log("Request Value");
    console.log(request);
    this.providerService
      .addContractor(request)
      .then(data => {
        // this.helper.successMessage({ message: });
        Swal.fire(
          'Updated!',
          'Provider information has been updated.',
          'success'
        )
        this.router.navigate(['/provider/provider-list']);
      })
      .catch(error => {
        // this.helper.errorMessage({ message: error.message });
      });
    this.regularForm.reset();
    //}

  }
  cancelBtnClick() {
    this.router.navigate(['/provider/provider-list'])
  }



}
