import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.css']
})
export class ChargesComponent implements OnInit {

  regularForm: FormGroup=Object.create(null);
  constructor() { }

  ngOnInit(): void {
    this.regularForm = new FormGroup({
      // 'name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]),
      // 'mobile':new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("^[0-9]*$")]),
      'cust_charg':new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$")]),
      'pro_charg':new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$")]),
      'vat_charg':new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$")]),
       'poor':new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$")]),
    

  }, {updateOn: 'blur'});
  }

}
