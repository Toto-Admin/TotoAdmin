import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  closeBtnClick(){
    this.router.navigate(['/setting/user-permission']);
  }

}
