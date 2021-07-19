import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {SettingService} from '../../Services/settings/setting.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(private settingService: SettingService) {
    this.getSettings();
   }
  regularForm: FormGroup=Object.create(null);
  ngOnInit(): void {

    this.regularForm = new FormGroup({
  
      'stripe_private_key':new FormControl(null,[Validators.required]),
      'stripe_secrate_key':new FormControl(null,[Validators.required]),

  }, {updateOn: 'blur'});
  }
  getSettings() {
    this.settingService.get().then(settings => {

      this.regularForm?.setValue({
        stripe_private_key: settings.stripe_private_key,
        stripe_secrate_key: settings.stripe_secrate_key,
      });
    }).catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `${error}`,
      })
    });
  }

  addUpdateSettings(){
    let keys = [
      {name: "stripe_private_key", value: this.regularForm.value.stripe_private_key},
      {name: "stripe_secrate_key", value: this.regularForm.value.stripe_secrate_key},
    ];
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
