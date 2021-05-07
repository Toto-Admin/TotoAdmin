import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router : Router) { }
  loginform: FormGroup=Object.create(null);
  ngOnInit(): void {
    this.loginform = new FormGroup({
      
      'inputEmail': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]),
      
  }, {updateOn: 'blur'});
  }
  // loginform = true;
  recoverform = false;

  showRecoverForm() {
    // this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }
   username = 'admin'; 
  password = '1234'; 


      logincheck()
      {  
          this.router.navigate(['/dashboard']);
      }
    
  }
