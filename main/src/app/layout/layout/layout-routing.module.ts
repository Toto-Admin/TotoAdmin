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
      path:'assessment',loadChildren:()=> import('../../Main/assessment/assessment.module').then(m=>m.AssessmentModule)
     },
     {
      path:'jobs',loadChildren:()=> import('../../Main/jobs/jobs.module').then(m=>m.JobsModule)
     },
     {
       path:'payment',loadChildren:()=> import('../../Main/payment/payment.module').then(m=>m.PaymentModule)
     }
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
