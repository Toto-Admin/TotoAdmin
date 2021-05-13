import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { GeneralSettingComponent } from './general-setting/general-setting.component';
import { NotificationTemplateComponent } from './notification-template/notification-template.component';
import { ReferralComponent } from './referral/referral.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { UserPermissionComponent } from './user-permission/user-permission.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  {path:'email-template',component:EmailTemplateComponent,data: {title: 'Settings'}},
  {path:'referral',component:ReferralComponent,data: {title: 'Settings'}},
  {path:'notification-template',component:NotificationTemplateComponent, data: {title: 'Settings'}},
  {path:'general-setting',component:GeneralSettingComponent,data: {title: 'Settings'}},
  {path:'user-permission',component:UserPermissionComponent,data: {title: 'Settings'}},
  {path:'admin-user', component:AdminUserComponent,data: {title: 'Settings'}},
  {path:'user-view',component:UserViewComponent,data: {title: 'Settings'}},
  {path:'profile',component:UserProfileComponent,data: {title: 'Settings'}},
  {path:'activity',component:ActivityComponent,data: {title: 'Settings'}},
  {path:'notification',component:SendNotificationComponent,data: {title: 'Settings'}}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
