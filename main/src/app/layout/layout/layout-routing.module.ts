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
      path: 'customer', loadChildren: () => import('../../customer/customer.module').then(m => m.CustomerModule)
    }

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
