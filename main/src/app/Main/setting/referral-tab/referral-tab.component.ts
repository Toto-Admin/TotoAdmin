import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-referral-tab',
  templateUrl: './referral-tab.component.html',
  styleUrls: ['./referral-tab.component.css']
})
export class ReferralTabComponent implements OnInit {

  
  regularForm: FormGroup=Object.create(null);
  constructor() { }

  ngOnInit(): void {

    this.regularForm = new FormGroup({

      'disc':new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$")]),
      'ref_detail':  new FormControl(null,Validators.required),
    

  }, {updateOn: 'blur'});
  }

}
