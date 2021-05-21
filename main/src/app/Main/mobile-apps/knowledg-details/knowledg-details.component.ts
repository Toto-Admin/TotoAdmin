import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupportService } from '../../Services/support.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-knowledg-details',
  templateUrl: './knowledg-details.component.html',
  styleUrls: ['./knowledg-details.component.css']
})
export class KnowledgDetailsComponent implements OnInit {
  KnowID : any;
  FilterAdminSubCategoryData : any;
  MainKnowDetails :any;
  KnowContent = Array();
  KnowledgeBaseContent : any;
  content : any;
  jsonData : any;

  constructor(private location: Location,private activatedRoute: ActivatedRoute,private support : SupportService) {

    this.activatedRoute.params.subscribe(params => {
      this.KnowID = params['id'];
    })

    this.support.getKnowledgebaseList().subscribe(data=>{
        this.jsonData = data;
        var data1 = this.jsonData['response'];
        this.FilterAdminSubCategoryData = data1['entries'];
        this.MainKnowDetails = this.FilterAdminSubCategoryData.filter((d: { kb_entry_id: string; }) => d.kb_entry_id === this.KnowID);    
        console.log(this.MainKnowDetails);
        this.content = this.MainKnowDetails[0].content; 
    
    })

   }

  ngOnInit(): void {
    $('#backButton').hide();
  }

  // back button
  backToPrevious(): void{
    this.location.back()
  }
}
