import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.regularForm = new FormGroup({
      'inputFirstname':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]),
      'inputLastname':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]),
      'inputEmail': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]),
      'latitude':new FormControl(null,[Validators.required]),
      'longitude':new FormControl(null,[Validators.required]),
      'mobile':new FormControl(null,[Validators.required,Validators.maxLength(10)]),
      'referral':new FormControl(null,[Validators.required]),
      'dob': new FormControl(null,[Validators.required]),
      'radioOption': new FormControl('Option one is this'),
      'sevices':new FormControl(null,[Validators.required]),
      'status':new FormControl(null,[Validators.required]),
      'vatname':new FormControl(null,[Validators.required]),
      'vatnum':new FormControl(null,[Validators.required]),
      'insurance':new FormControl(null,[Validators.required]),
      'pimg':new FormControl(null,[Validators.required]),

  }, {updateOn: 'blur'});
  }
  
  // @ViewChild('f', {static:true}) floatingLabelForm: NgForm=Object.create(null);
  // @ViewChild('vform', {static:true}) validationForm: FormGroup=Object.create(null);
  regularForm: FormGroup=Object.create(null);
  radioOptions = ['Male', 'Female'];

 

  onReactiveFormSubmit() {
      this.regularForm.reset();
  }
  cancelBtnClick(){
    this.router.navigate(['/provider/provider-list'])
  }
 


}
