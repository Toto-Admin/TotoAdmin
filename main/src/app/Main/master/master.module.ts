import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { ServicesComponent } from './services/services.component';
import { CategoriesComponent } from './categories/categories.component';
import { DataTablesModule } from 'angular-datatables';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [ServicesComponent, CategoriesComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    DataTablesModule,
    ReactiveFormsModule
  ]
})
export class MasterModule { }
