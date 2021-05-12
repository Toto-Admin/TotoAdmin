import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverageAreaComponent } from './coverage-area/coverage-area.component';
import { PromocodesComponent } from './promocodes/promocodes.component';
import { ReportComponent } from './report/report.component';
import { RewardsComponent } from './rewards/rewards.component';

const routes: Routes = [
  {path:'promocodes', component:PromocodesComponent,data: {title: 'Promo Code'}},
  {path:'rewards',component:RewardsComponent,data: {title: 'Rewards'}},
  {path:'reports',component:ReportComponent,data: {title: 'Marketing Dashboard'}},
  {path:'coverage-area',component:CoverageAreaComponent,data: {title: 'Coverage Area'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingRoutingModule { }
