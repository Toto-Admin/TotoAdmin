import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { GeneralSettingComponent } from './general-setting/general-setting.component';
import { NotificationTemplateComponent } from './notification-template/notification-template.component';
import { ReferralComponent } from './referral/referral.component';
import { UserPermissionComponent } from './user-permission/user-permission.component';

const routes: Routes = [
  {path:'email-template',component:EmailTemplateComponent},
  {path:'referral',component:ReferralComponent},
  {path:'notification-template',component:NotificationTemplateComponent},
  {path:'general-setting',component:GeneralSettingComponent},
  {path:'user-permission',component:UserPermissionComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
