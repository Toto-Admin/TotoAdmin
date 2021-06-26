import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
import { AuthService } from '../Main/Services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {
  setPassForm!: FormGroup;
  loginResponse: any = {};
  token: any;
  setPasswordResponse: any;
  setPasswordType: String = 'danger';
  showPassword: boolean = false;
  showConPassword: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe(params => {
      if (params.token != undefined && params.token != null) {
        this.token = params.token;
      }
    });

    this.setPassForm = this.formBuilder.group({
      "password": ['', Validators.required],
      'confrim_password': [null, [Validators.required, this.passwordMatch]]
    });
  }

  passwordMatch(control: AbstractControl) {
    let paswd = control.root.get('password');
    if (paswd && control.value != paswd.value) {
      return {
        passwordMatch: true
      };
    }
    return null;
  }
  doSetPassword() {
    if (this.setPassForm.valid) {
      let request: any = {
        ...this.setPassForm.value,
        token: this.token
      }
      this.authService.setPassword(request)
        .then((_res: any) => {
          Swal.fire({
            icon: 'success',
            text: _res.message,
          })
          this.router.navigate(['/login']);
        }).catch((err: any) => {

          this.setPasswordResponse = err;
        });
    }
  }

  showPass() {
    if (this.showPassword == false) {
      this.showPassword = true;
    } else {
      this.showPassword = false;
    }
  }

  showConPass() {
    if (this.showConPassword == false) {
      this.showConPassword = true;
    } else {
      this.showConPassword = false;
    }
  }

}
