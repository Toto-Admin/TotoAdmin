import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {SettingService} from '../../Services/settings/setting.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  regularForm: FormGroup=Object.create(null);
  constructor(private settingService: SettingService)
  { 
    this.getSettings();
  }

  ngOnInit(): void {
    // $('#backButton').hide();

    this.regularForm = new FormGroup({      
      'to_email': new FormControl(null, [Validators.required, Validators.email]),
      'from_email': new FormControl(null, [Validators.required, Validators.email]), 
    }, {updateOn: 'blur'});
  }
  
  getSettings() {
    this.settingService.get().then(settings => {

      this.regularForm?.setValue({
        to_email: settings.to_email,
        from_email: settings.from_email,
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
      {name: "to_email", value: this.regularForm.value.to_email},
      {name: "from_email", value: this.regularForm.value.from_email},
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
