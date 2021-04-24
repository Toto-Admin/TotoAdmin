import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
    NgxChartsModule,
    PerfectScrollbarModule,
    NgbModule
  ]
})
export class DashboardModule { }
