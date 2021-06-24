import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Main/Services/auth/auth.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginResponse: any;
  forgotPasswordResponse: any;
  forgotPasswordType: string | undefined;

  constructor(private router: Router, private authService: AuthService,private formBuilder: FormBuilder) { }
  loginform: FormGroup = Object.create(null);
  forgotPassForm: FormGroup= Object.create(null);
  ngOnInit(): void {
    this.loginform = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]),
      'rememberMe': new FormControl(null)
    }, { updateOn: 'blur' });

    this.forgotPassForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  // loginform = true;
  recoverform = false;

  showRecoverForm() {
    // this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }
 

  doLogin() {
    debugger
    if (this.loginform.valid) {
      let request: any = {
        ...this.loginform.value,
      }
      this.authService.login(request)
        .then((_res) => {
          debugger
          let value = this.loginform.get('rememberMe')?.value;
          if(value){
            localStorage.setItem('token', _res.token);
            localStorage.setItem('user', JSON.stringify(_res.user));
          }
          this.router.navigate(['/dashboard']);
        }).catch((err) => {
          this.loginResponse = err;
          console.log(this.loginResponse);
          Swal.fire(
            this.loginResponse.extensions.code,
            this.loginResponse.message
          )
        });
    }
  }


  doForgotPass() {
    if (this.forgotPassForm.valid) {
      let request: any = {
        ...this.forgotPassForm.value,
      }
      this.authService.forgotPassword(request)
        .then((_res) => {
          this.forgotPasswordResponse = _res;
          this.forgotPasswordType = "success";
          this.recoverform = !this.recoverform;
          Swal.fire({
            icon: 'success',
            title: 'Email Sent',
            text: 'Password reset link has been sent on your email, Please check your inbox.',
          })
        //  this.router.navigate(['/login']);
        }).catch((err) => {
          this.forgotPasswordResponse = err;
        });
    }
  }

}
