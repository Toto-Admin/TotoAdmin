import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockReasonComponent } from './block-reason/block-reason.component';
import { CancelReasonComponent } from './cancel-reason/cancel-reason.component';
import { CategoryComponent } from './category/category.component';
import { DisputeReasonComponent } from './dispute-reason/dispute-reason.component';
import { FeedbackViewComponent } from './feedback-view/feedback-view.component';
import { FeedbackComponent } from './feedback/feedback.component';
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
  {path:'knowledge',component:KnowledgeComponent,data: {title: 'Knowledgebase'}},
  {path:'mobile-content',component:MobileContentComponent, data: {title: 'Mobile App'}},
  {path:'transport',component:TransportComponent, data: {title: 'Mobile App'}},
  {path:'like',component:LikeReasonComponent,data: {title: 'Mobile App'}},
  {path:'cancel',component:CancelReasonComponent,data: {title: 'Mobile App'}},
  {path:'dispute',component:DisputeReasonComponent,data: {title: 'Mobile App'}},
  {path:'reject',component:RejectReasonComponent,data: {title: 'Mobile App'}},
  {path:'block',component:BlockReasonComponent,data: {title: 'Mobile App'}},
  {path:'knowledge-list/:id',component : KnowledgeListComponent,data: {title: 'Knowledgebase List'}},
  {path:'knowledge-details/:id',component:KnowledgDetailsComponent, data: {title: 'Knowledgebase Details'}},
  {path:'feedback',component:FeedbackComponent,data: {title: 'Mobile App'}},
  {path:'feedback-view',component:FeedbackViewComponent,data: {title: 'Mobile App'}}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileAppsRoutingModule { }
