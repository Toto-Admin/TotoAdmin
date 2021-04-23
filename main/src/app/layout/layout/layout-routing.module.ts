import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from 'src/app/layouts/full/full.component';

const routes: Routes = [
  {
  path: '',
  component: FullComponent,
  children: [
    {
      path: 'dashboard', loadChildren: () => import('../../Main/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: 'customer', loadChildren: () => import('../../Main/customer/customer.module').then(m => m.CustomerModule)
    },
    { 
      path:'provider',loadChildren:() => import('../../Main/provider/provider.module').then(m =>m.ProviderModule)
     },
     {
      path:'assessment',loadChildren:() => import('../../Main/assessment/assessment.module').then(m =>m.AssessmentModule)
     },
     {
      path:'jobs',loadChildren:() => import('../../Main/jobs/jobs.module').then(m =>m.JobsModule)
     },
     {
       path:'payment',loadChildren:() => import('../../Main/payment/payment.module').then(m =>m.PaymentModule)
     },
     {
       path:'mobile-apps',loadChildren:() => import('../../Main/mobile-apps/mobile-apps.module').then(m =>m.MobileAppsModule)
     },
     {
       path:'master',loadChildren:() => import('../../Main/master/master.module').then(m =>m.MasterModule)
     },
    {
      path:'marketing',loadChildren:() => import('../../Main/marketing/marketing.module').then(m =>m.MarketingModule)
    },
    {
      path:'setting',loadChildren:() => import('../../Main/setting/setting.module').then(m =>m.SettingModule)
    },
    {
      path:'ticket',loadChildren:() => import('../../Main/ticket/ticket.module').then(m =>m.TicketModule)
    },
    {
      path:'myprofile',loadChildren:() => import('../../Main/myprofile/myprofile.module').then(m =>m.MyprofileModule)
    }
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
