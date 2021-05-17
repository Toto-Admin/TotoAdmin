import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent  implements OnInit {

  regularForm: FormGroup=Object.create(null);
  ngOnInit(): void {
    

    this.regularForm = new FormGroup({
 
      'old_pass': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]),
      'new_pass': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]),
      'confirm_pass': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]),
     
  }, {updateOn: 'blur'});
  }

}
