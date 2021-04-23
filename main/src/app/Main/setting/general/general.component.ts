import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  regularForm: FormGroup=Object.create(null);

  constructor() { }

  ngOnInit(): void {

    this.regularForm = new FormGroup({
      // 'name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]),
      'mobile':new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("^[0-9]*$")]),
      'twino':new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$")]),
      'book_task':new FormControl(null,[Validators.required]),
    

  }, {updateOn: 'blur'});
  }

}
