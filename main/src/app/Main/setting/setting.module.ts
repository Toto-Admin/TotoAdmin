import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { ReferralComponent } from './referral/referral.component';
import { NotificationTemplateComponent } from './notification-template/notification-template.component';
import { UserPermissionComponent } from './user-permission/user-permission.component';
import { GeneralSettingComponent } from './general-setting/general-setting.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GeneralComponent } from './general/general.component';
import { ChargesComponent } from './charges/charges.component';
import { EmailComponent } from './email/email.component';
import { MenuComponent } from './menu/menu.component';
import { ReferralTabComponent } from './referral-tab/referral-tab.component';
import { InfoComponent } from './info/info.component';
import { ConfigComponent } from './config/config.component';
import { QuillModule } from 'ngx-quill';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule} from '@angular/forms';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ActivityComponent } from './activity/activity.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { PermissionComponent } from './permission/permission.component';
@NgModule({
  declarations: [EmailTemplateComponent, ReferralComponent, NotificationTemplateComponent, UserPermissionComponent, GeneralSettingComponent, GeneralComponent, ChargesComponent, EmailComponent, MenuComponent, ReferralTabComponent, InfoComponent, ConfigComponent, AdminUserComponent, UserViewComponent, UserProfileComponent, ActivityComponent, SendNotificationComponent, PermissionComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    QuillModule.forRoot(),
    DataTablesModule
  ]
})
export class SettingModule { }
