import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockReasonComponent } from './block-reason/block-reason.component';
import { CancelReasonComponent } from './cancel-reason/cancel-reason.component';
import { CategoryComponent } from './category/category.component';
import { DisputeReasonComponent } from './dispute-reason/dispute-reason.component';
import { KnowledgDetailsComponent } from './knowledg-details/knowledg-details.component';
import { KnowledgeListComponent } from './knowledge-list/knowledge-list.component';

import { KnowledgeComponent } from './knowledge/knowledge.component';
import { LikeReasonComponent } from './like-reason/like-reason.component';
import { MobileContentComponent } from './mobile-content/mobile-content.component';
import { QuestionsComponent } from './questions/questions.component';
import { RejectReasonComponent } from './reject-reason/reject-reason.component';

import { TransportComponent } from './transport/transport.component';

const routes: Routes = [
 
  {path:'questions',component:QuestionsComponent},
  {path:'category',component:CategoryComponent},
  {path:'knowledge',component:KnowledgeComponent},
  {path:'mobile-content',component:MobileContentComponent},
  {path:'transport',component:TransportComponent},
  {path:'like',component:LikeReasonComponent},
  {path:'cancel',component:CancelReasonComponent},
  {path:'dispute',component:DisputeReasonComponent},
  {path:'reject',component:RejectReasonComponent},
  {path:'block',component:BlockReasonComponent},
  {path:'knowledge-list',component : KnowledgeListComponent},
  {path:'knowledge-details',component:KnowledgDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileAppsRoutingModule { }
