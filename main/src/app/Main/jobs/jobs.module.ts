import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { JobDashboardComponent } from './job-dashboard/job-dashboard.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [JobDashboardComponent],
  imports: [
    CommonModule,
    NgApexchartsModule,
    NgxChartsModule,
    JobsRoutingModule,
    ChartsModule,
    ChartistModule,
    AgmCoreModule
  ]
})
export class JobsModule { }
