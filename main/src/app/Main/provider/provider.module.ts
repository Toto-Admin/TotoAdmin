import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgApexchartsModule } from "ng-apexcharts";

import { ProviderListComponent } from './provider-list/provider-list.component';


@NgModule({
  declarations: [DashboardComponent,  ProviderListComponent],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    ChartsModule,
    ChartistModule,
    NgxChartsModule,
    NgApexchartsModule
   
 
   
  ]
})
export class ProviderModule { }
