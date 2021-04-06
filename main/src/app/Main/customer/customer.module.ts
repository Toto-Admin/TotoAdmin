import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
<<<<<<< Updated upstream
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';
// import 
=======
import { NgApexchartsModule } from "ng-apexcharts";
>>>>>>> Stashed changes


@NgModule({
  declarations: [DashboardComponent, CustomerListComponent, CustomerAddComponent, CustomerEditComponent, CustomerViewComponent],
  imports: [
    CommonModule,
<<<<<<< Updated upstream
    AgmCoreModule,
    CustomerRoutingModule
    // RouterModule.forChild(CustomerRoutingModule)
=======
    CustomerRoutingModule,
    NgApexchartsModule
>>>>>>> Stashed changes
  ]
})
export class CustomerModule { }
