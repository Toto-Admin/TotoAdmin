import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild ,Directive} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Directive({selector: 'divMessages'})
class ChildDirective {
}
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  @ViewChild(ChildDirective) divMessages!: ChildDirective;
  regularForm: FormGroup=Object.create(null);

  constructor(private router : Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.regularForm = new FormGroup({
      'name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]),
      'passing_rank':new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$")]),
      'duration':new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$")]),
      'duration_type':new FormControl(null,[Validators.required]),
      'services':new FormControl(null,[Validators.required]),
      'ques':new FormControl(null,[Validators.required]),
      'ans':new FormControl(null,[Validators.required]),
      'option_a':new FormControl(null,[Validators.required]),
      'option_b':new FormControl(null,[Validators.required]),
      'option_c':new FormControl(null,[Validators.required]),
      'option_d':new FormControl(null,[Validators.required]),

  }, {updateOn: 'blur'});
    
    
  }
  closeBtnClick(){
     this.router.navigate(['/assessment/list']);
  }
 

  addQue(){
    var appendElement = `` ;
    this.divMessages = appendElement;
  }
}
