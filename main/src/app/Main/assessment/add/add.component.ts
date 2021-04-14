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

  constructor(private router : Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }
  closeBtnClick(){
     this.router.navigate(['/assessment/list']);
  }
 

  addQue(){
    var appendElement = `` ;
    this.divMessages = appendElement;
  }
}
