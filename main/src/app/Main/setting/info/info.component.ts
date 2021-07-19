import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SettingService } from '../../Services/settings/setting.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  regularForm: FormGroup = Object.create(null);
  constructor(private settingService: SettingService) {
    this.getSettings();
  }

  ngOnInit(): void {
    // $('#backButton').hide();

    this.regularForm = new FormGroup({
      'onsite_info': new FormControl(null, []),
      'remote_info': new FormControl(null, []),
      'basic_info': new FormControl(null, []),
      'completed_text': new FormControl(null, []),
      'detail_text': new FormControl(null, []),
      'reschedule_text': new FormControl(null, []),
      'coverage_info': new FormControl(null, []),
      'availability_info': new FormControl(null, []),
      'category_info': new FormControl(null, []),
      'feedback_ratio_info': new FormControl(null, []),
      'referral_info': new FormControl(null, []),
      'customer_liked_info': new FormControl(null, []),
      'no_of_attempt_info': new FormControl(null, []),
      'test_date_info': new FormControl(null, []),
      'test_duration_info': new FormControl(null, []),
      'rating_info': new FormControl(null, []),
      'time_keeping_info': new FormControl(null, []),
      'complaints_info': new FormControl(null, []),
      'response_info': new FormControl(null, []),
      'acceptance_info': new FormControl(null, []),
      'reliability_info': new FormControl(null, []),
      'correction_rate_info': new FormControl(null, []),
    }, { updateOn: 'blur' });
  }

  getSettings() {
    this.settingService.get().then(settings => {
      console.log("GetData");
      console.log(settings);
      this.regularForm?.setValue({
        onsite_info: settings.onsite_info,
        remote_info: settings.remote_info,
        basic_info: settings.basic_info,
        completed_text: settings.completed_text,
        detail_text: settings.detail_text,
        reschedule_text: settings.reschedule_text,
        coverage_info: settings.coverage_info, 
        availability_info: settings.availability_info,
        category_info: settings.category_info,
        feedback_ratio_info: settings.feedback_ratio_info,
        referral_info: settings.referral_info,
        customer_liked_info: settings.customer_liked_info,
        no_of_attempt_info: settings.no_of_attempt_info,
        test_date_info: settings.test_date_info,
        test_duration_info: settings.test_duration_info,
        rating_info: settings.rating_info,
        time_keeping_info: settings.time_keeping_info,
        complaints_info: settings.complaints_info,
        response_info: settings.response_info,
        acceptance_info: settings.acceptance_info,
        reliability_info: settings.reliability_info,
        correction_rate_info: settings.correction_rate_info,
      });
    }).catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `${error}`,
      })
    });
  }

  addUpdateSettings() {
    let keys = [
      { name: "onsite_info", value: this.regularForm.value.onsite_info },
      { name: "remote_info", value: this.regularForm.value.remote_info },
      { name: "basic_info", value: this.regularForm.value.basic_info },
      { name: "completed_text", value: this.regularForm.value.completed_text },
      { name: "detail_text", value: this.regularForm.value.detail_text },
      { name: "reschedule_text", value: this.regularForm.value.reschedule_text },
      { name: "coverage_info", value: this.regularForm.value.coverage_info },
      { name: "availability_info", value: this.regularForm.value.availability_info },
      { name: "category_info", value: this.regularForm.value.category_info },
      { name: "feedback_ratio_info", value: this.regularForm.value.feedback_ratio_info },
      { name: "referral_info", value: this.regularForm.value.referral_info },
      { name: "customer_liked_info", value: this.regularForm.value.customer_liked_info },
      { name: "no_of_attempt_info", value: this.regularForm.value.no_of_attempt_info },
      { name: "test_date_info", value: this.regularForm.value.test_date_info },
      { name: "test_duration_info", value: this.regularForm.value.test_duration_info },
      { name: "rating_info", value: this.regularForm.value.rating_info },
      { name: "time_keeping_info", value: this.regularForm.value.time_keeping_info },
      { name: "complaints_info", value: this.regularForm.value.complaints_info },
      { name: "response_info", value: this.regularForm.value.response_info },
      { name: "acceptance_info", value: this.regularForm.value.acceptance_info },
      { name: "reliability_info", value: this.regularForm.value.reliability_info },
      { name: "correction_rate_info", value: this.regularForm.value.correction_rate_info },
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
