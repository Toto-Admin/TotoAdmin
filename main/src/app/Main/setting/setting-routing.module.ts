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
  {path:'email-template',component:EmailTemplateComponent,data: {title: 'Email Template'}},
  {path:'referral',component:ReferralComponent,data: {title: 'Referral Management'}},
  {path:'notification-template',component:NotificationTemplateComponent, data: {title: 'Notification Template'}},
  {path:'general-setting',component:GeneralSettingComponent,data: {title: 'General Setting'}},
  {path:'user-permission',component:UserPermissionComponent,data: {title: 'User And Permission'}},
  {path:'admin-user', component:AdminUserComponent,data: {title: 'Admin User'}},
  {path:'user-view',component:UserViewComponent,data: {title: 'User Details'}},
  {path:'profile',component:UserProfileComponent,data: {title: 'User Profile'}},
  {path:'activity',component:ActivityComponent,data: {title: 'User Activity'}},
  {path:'notification',component:SendNotificationComponent,data: {title: 'Notification'}}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
