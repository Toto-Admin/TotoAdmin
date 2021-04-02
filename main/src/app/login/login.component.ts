import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  loginform = true;
  recoverform = false;

  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }
   username = 'admin'; 
  password = '1234'; 


      logincheck()
      {  
          this.router.navigate(['/dashboard']);
      }
    
  }
