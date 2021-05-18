import { Component, OnInit } from '@angular/core';
import {NgbNavChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  constructor() { }
  currentJustify = 'start';

  active=1;

  activeKeep=1;

  activeSelected=1;
  disabled = true;

  
  tabs = [1, 2, 3, 4, 5];
  counter = this.tabs.length + 1;
  activeDynamic=1;
  ngOnInit(): void {
    $('#backButton').show();

  }

  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 3) {
      changeEvent.preventDefault();
    }
  }
}
