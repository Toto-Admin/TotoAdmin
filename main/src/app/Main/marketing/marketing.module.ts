import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingRoutingModule } from './marketing-routing.module';
import { PromocodesComponent } from './promocodes/promocodes.component';
import { RewardsComponent } from './rewards/rewards.component';
import { ReportComponent } from './report/report.component';
import { DataTablesModule } from 'angular-datatables';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from "ng-apexcharts";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import {ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
@NgModule({
  declarations: [PromocodesComponent, RewardsComponent, ReportComponent],
  imports: [
    CommonModule,
    MarketingRoutingModule,
    DataTablesModule,
    ChartsModule,
    NgApexchartsModule,
    NgxChartsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class MarketingModule { }
