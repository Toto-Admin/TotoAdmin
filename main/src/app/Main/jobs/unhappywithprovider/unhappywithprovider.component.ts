import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unhappywithprovider',
  templateUrl: './unhappywithprovider.component.html',
  styleUrls: ['./unhappywithprovider.component.css']
})
export class UnhappywithproviderComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit(): void {
    $('#backButton').hide();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:10,
      ordering : true,
      lengthMenu :[[10,25,50,100,-1],[10,25,50,100,'All']],
      columnDefs: [
        { orderable: false, targets: -1 }
     ]
    };
  }

}
