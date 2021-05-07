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

    this.regularForm = this.formBuilder.group({
      'name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]),
      'passing_rank':new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$")]),
      'duration':new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$")]),
      'duration_type':new FormControl(null,[Validators.required]),
      'services':new FormControl(null,[Validators.required]),
      'ques':this.formBuilder.array([this.createQue()]),
      'ans':new FormControl(null,[Validators.required]),
      'option_a':new FormControl(null,[Validators.required]),
      'option_b':new FormControl(null,[Validators.required]),
      'option_c':new FormControl(null,[Validators.required]),
      'option_d':new FormControl(null,[Validators.required]),
      

  }, {updateOn: 'blur'});
    
    
  }
  createQue(): FormGroup {
    return this.formBuilder.group({
      // question: new FormControl('', Validators.required),
      //exam_id: new FormControl(''),
      
      'ans':new FormControl(null,[Validators.required]),
      'option_a':new FormControl(null,[Validators.required]),
      'option_b':new FormControl(null,[Validators.required]),
      'option_c':new FormControl(null,[Validators.required]),
      'option_d':new FormControl(null,[Validators.required]),
  
    });
  }
  get questions(): FormArray {
		return this.regularForm.get("ques") as FormArray;
  }
  
 
  addQue(): void {
  
    this.questions.push(this.createQue());
  }
  removeQue(i:number) {  
    this.questions.removeAt(i);  
  }  
  closeBtnClick(){
    this.router.navigate(['/assessment/list']);
 }

}
