import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {SettingService} from '../../Services/settings/setting.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  regularForm: FormGroup=Object.create(null);
  constructor(private settingService: SettingService)
  { 
    this.getSettings();
  }

  ngOnInit(): void {

    this.regularForm = new FormGroup({
      'phone':new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("^[0-9]*$")]),
      'twillio_from_number':new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$")]),
      'maxDay':new FormControl(null,[Validators.required]),
      'address':new FormControl(null,[Validators.required]),
      'fb_link':new FormControl(null,[Validators.required]),
    

  }, {updateOn: 'blur'}); 
  }

  getSettings() {
    this.settingService.get().then(settings => {

      this.regularForm?.setValue({
        phone: settings.phone,
        twillio_from_number: settings.twillio_from_number,
        maxDay: settings.maxDay,
        address: settings.address,
        fb_link: settings.fb_link
      });
    });
  }

  addUpdateSettings(){
    let keys = [
      {name: "phone", value: this.regularForm.value.phone},
      {name: "twillio_from_number", value: this.regularForm.value.twillio_from_number},
      {name: "maxDay", value: this.regularForm.value.maxDay},
      {name: "address", value: this.regularForm.value.address},
      {name: "fb_link", value: this.regularForm.value.fb_link}
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
