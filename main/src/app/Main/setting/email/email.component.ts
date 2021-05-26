import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  regularForm: FormGroup=Object.create(null);
  constructor() { }

  ngOnInit(): void {
    $('#backButton').hide();

    this.regularForm = new FormGroup({
      
      'toEmail': new FormControl(null, [Validators.required, Validators.email]),
      'fromEmail': new FormControl(null, [Validators.required, Validators.email]),
  
      

  }, {updateOn: 'blur'});
  }

}
