import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromocodesComponent } from './promocodes/promocodes.component';
import { ReportComponent } from './report/report.component';
import { RewardsComponent } from './rewards/rewards.component';

const routes: Routes = [
  {path:'promocodes', component:PromocodesComponent},
  {path:'rewards',component:RewardsComponent},
  {path:'reports',component:ReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingRoutingModule { }
