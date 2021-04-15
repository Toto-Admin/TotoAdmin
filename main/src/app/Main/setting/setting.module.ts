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
@NgModule({
  declarations: [EmailTemplateComponent, ReferralComponent, NotificationTemplateComponent, UserPermissionComponent, GeneralSettingComponent, GeneralComponent, ChargesComponent, EmailComponent, MenuComponent, ReferralTabComponent, InfoComponent, ConfigComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    NgbModule,
    QuillModule.forRoot(),
    DataTablesModule
  ]
})
export class SettingModule { }
