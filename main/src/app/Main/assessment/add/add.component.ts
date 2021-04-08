import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  

  
  constructor(private router : Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }
  closeBtnClick(){
     this.router.navigate(['/assessment/list']);
  }
 

  addQue(){
  
  }
}
