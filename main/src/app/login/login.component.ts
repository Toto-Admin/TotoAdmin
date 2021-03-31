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
   username = 'admin'; 
  password = '1234'; 


      logincheck()
      {  
        debugger
          this.router.navigate(['/dashboard/customer']);
      }
    
  }
