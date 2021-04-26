import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverageAreaComponent } from './coverage-area/coverage-area.component';
import { PromocodesComponent } from './promocodes/promocodes.component';
import { ReportComponent } from './report/report.component';
import { RewardsComponent } from './rewards/rewards.component';

const routes: Routes = [
  {path:'promocodes', component:PromocodesComponent},
  {path:'rewards',component:RewardsComponent},
  {path:'reports',component:ReportComponent},
  {path:'coverage-area',component:CoverageAreaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingRoutingModule { }
