import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {SettingService} from '../../Services/settings/setting.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-referral-tab',
  templateUrl: './referral-tab.component.html',
  styleUrls: ['./referral-tab.component.css']
})
export class ReferralTabComponent implements OnInit {

  
  regularForm: FormGroup=Object.create(null);
  constructor(private settingService: SettingService) { 
    this.getSettings();
  } 

  ngOnInit(): void {

    this.regularForm = new FormGroup({

      'referral_discount':new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$")]),
      'referral_detail':  new FormControl(null,Validators.required),
    

  }, {updateOn: 'blur'});
  }
  
  getSettings() {
    this.settingService.get().then(settings => {

      this.regularForm?.setValue({
        referral_discount: settings.referral_discount,
        // referral_detail: settings.referral_detail,
      });
    });
  }

  addUpdateSettings(){
    let keys = [
      {name: "referral_discount", value: this.regularForm.value.referral_discount},
      {name: "referral_detail", value: this.regularForm.value.referral_detail},
    ];
    // for (let key in this.regularForm.value) {
    //   keys.push({ name: key, value: this.settings[key] });
    // }
    this.settingService.add(keys).then((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Save',
        text: `${data.message}`,
      }) 
    }).catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `${error}`,
      }) 
    });
  }


}
