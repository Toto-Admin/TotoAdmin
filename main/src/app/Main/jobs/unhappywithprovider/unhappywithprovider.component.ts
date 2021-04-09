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
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:5,
    };
  }

}
