import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor() { }
  regularForm: FormGroup=Object.create(null);
  ngOnInit(): void {

    this.regularForm = new FormGroup({
  
      'priv_key':new FormControl(null,[Validators.required]),
      'sec_key':new FormControl(null,[Validators.required]),
   
    

  }, {updateOn: 'blur'});
  }

}
