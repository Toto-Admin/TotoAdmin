import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileAppsRoutingModule } from './mobile-apps-routing.module';
import { CategoryComponent } from './category/category.component';
import{QuestionsComponent } from './questions/questions.component';
import { MobileContentComponent } from './mobile-content/mobile-content.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';

import { TransportComponent } from './transport/transport.component';
import { LikeReasonComponent } from './like-reason/like-reason.component';
import { CancelReasonComponent } from './cancel-reason/cancel-reason.component';
import { RejectReasonComponent } from './reject-reason/reject-reason.component';
import { DisputeReasonComponent } from './dispute-reason/dispute-reason.component';
import { BlockReasonComponent } from './block-reason/block-reason.component';
import { DataTablesModule } from 'angular-datatables';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [MobileContentComponent, KnowledgeComponent,  TransportComponent,CategoryComponent,QuestionsComponent, LikeReasonComponent, CancelReasonComponent, RejectReasonComponent, DisputeReasonComponent, BlockReasonComponent,
  ],
  imports: [
    CommonModule,
    QuillModule.forRoot(),
    MobileAppsRoutingModule,
    DataTablesModule,
    

  ]
})
export class MobileAppsModule { }
