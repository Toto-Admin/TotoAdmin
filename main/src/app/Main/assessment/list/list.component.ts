import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor(private router : Router) { }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:10,
      ordering : true,
      lengthMenu :[[10,25,50,100,-1],[10,25,50,100,'All']],
     
    };
  }
  btnClick(){
    this.router.navigate(['/assessment/add']);
  }
  closeBtnClick(){
    // this.router.navigate(['/assessment/list']);
  }

}
