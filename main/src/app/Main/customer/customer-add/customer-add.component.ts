import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  constructor(private router: Router) { }

  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength : 5,
      lengthMenu : [5,15,25],
      processing : true
    };

    this.regularForm = new FormGroup({
      'first_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]),
      'last_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]),
      // 'latitude':new FormControl(null,[Validators.required]),
      // 'longitude':new FormControl(null,[Validators.required]),
      // 'mobile':new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10) , Validators.pattern("^[0-9]*$")]),
      'address':new FormControl(null,[Validators.required]),
      'dob': new FormControl(null,[Validators.required]),
      'profile_pic':new FormControl(null),
      'gender': new FormControl()
  }, {updateOn: 'blur'});
  }

  @ViewChild('f', {static:true}) floatingLabelForm: NgForm=Object.create(null);
  @ViewChild('vform', {static:true}) validationForm: FormGroup=Object.create(null);
  regularForm: FormGroup=Object.create(null);
  radioOptions = ['Male', 'Female'];

 

  onReactiveFormSubmit() {
    console.log(this.regularForm.value);
    this.regularForm.reset();
  }
  cancelBtnClick(){
    this.router.navigate(['/customer/customer-list'])
  }

  
 

}
