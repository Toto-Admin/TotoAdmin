import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgApexchartsModule } from "ng-apexcharts";

import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderViewComponent } from './provider-view/provider-view.component';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DocumentComponent } from './document/document.component';
import { PerformanceComponent } from './performance/performance.component';
import { AvailabilityComponent } from './availability/availability.component';
import { TaskHistoryComponent } from './task-history/task-history.component';
import { ReviewRatingComponent } from './review-rating/review-rating.component';
import { DataTablesModule } from 'angular-datatables';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AssessmentComponent } from './assessment/assessment.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [DashboardComponent,  ProviderListComponent, ProviderViewComponent, DocumentComponent, PerformanceComponent, 
    AvailabilityComponent, TaskHistoryComponent, ReviewRatingComponent, AssessmentComponent, TimelineComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    AgmCoreModule,
    ProviderRoutingModule,
    ChartsModule,
    ChartistModule,
    NgxChartsModule,
    NgApexchartsModule,
    NgbModule,
    ReactiveFormsModule,
    DataTablesModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
  }),
  ]
})
export class ProviderModule { }
