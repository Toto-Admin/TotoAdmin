import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingRoutingModule } from './marketing-routing.module';
import { PromocodesComponent } from './promocodes/promocodes.component';
import { RewardsComponent } from './rewards/rewards.component';
import { ReportComponent } from './report/report.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [PromocodesComponent, RewardsComponent, ReportComponent],
  imports: [
    CommonModule,
    MarketingRoutingModule,
    DataTablesModule
  ]
})
export class MarketingModule { }
