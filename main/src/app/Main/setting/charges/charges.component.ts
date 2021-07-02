import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {SettingService} from '../../Services/settings/setting.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.css']
})
export class ChargesComponent implements OnInit {

  regularForm: FormGroup=Object.create(null);
  constructor(private settingService: SettingService)
  { 
    this.getSettings();
  }

  ngOnInit(): void {
    this.regularForm = new FormGroup({
      'seeker_charges':new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$")]),
      'provider_charges':new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$")]),
      'vat_charges':new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$")]),
      'poor_performance':new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$")]),
    

  }, {updateOn: 'blur'});
  }

  
  getSettings() {
    this.settingService.get().then(settings => {

      this.regularForm?.setValue({
        seeker_charges: settings.seeker_charges,
        provider_charges: settings.provider_charges,
        vat_charges: settings.vat_charges,
        poor_performance: settings.poor_performance,
      });
    });
  }

  addUpdateSettings(){
    let keys = [
      {name: "seeker_charges", value: this.regularForm.value.seeker_charges},
      {name: "provider_charges", value: this.regularForm.value.provider_charges},
      {name: "vat_charges", value: this.regularForm.value.vat_charges},
      {name: "poor_performance", value: this.regularForm.value.poor_performance},
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
