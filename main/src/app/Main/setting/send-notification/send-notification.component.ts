import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.css']
})
export class SendNotificationComponent implements OnInit {

  constructor(private router:Router){}
 
  cust: string[] = [];
  selectedCust: string[] = [];
  provider:string[]=[];
  selectedPro: string[] = [];
  notification:string[]=[];
  selectedNotification:string[]=[];
  // singleselectedItems: string[] = [];
  dropdownSettings = {};
  singledropdownSettings = {};
  closeDropdownSelection = false;
  ngOnInit() {
    this.cust = ['Johan Smith', 'Ronald King', 'John Wilson', 'Donald White', 'James Harry'];
    this.selectedCust = ['Donald White', 'James Harry'];
    this.provider=['Johan Smith','Donald White','James Mark','Jack King'];
    this.selectedPro=['Jack King'];
    this.notification=['Diwoffer','Free service','New offer available','RainySeason'];
    this.selectedNotification=['Diwoffer'];
    // this.singleselectedItems = ['Pune'];
    // this.singledropdownSettings = {
    //   singleSelection: true,
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   allowSearchFilter: true,
    //   closeDropDownOnSelection: this.closeDropdownSelection
    // };

    this.dropdownSettings = {
      singleSelection: false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter:true
    };
  }
  onCustSelect(item: any) {
    console.log(item);
  }
  onProSelect(item:any){
    console.log(item);
  }
  onNotifSelect(item:any){
    console.log(item);
  }
  notifyList(){
    this.router.navigate(['/setting/notification-template']);
    
  }
}

