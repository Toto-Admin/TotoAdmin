import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupportService } from '../../Services/support.service';
@Component({
  selector: 'app-knowledge-list',
  templateUrl: './knowledge-list.component.html',
  styleUrls: ['./knowledge-list.component.css']
})
export class KnowledgeListComponent implements OnInit {
  //Knowledgebase Details
  FilterAdminSubCategoryData : any;
  OriginalData : any;
  MainKnowDetails :any;
  KnowID : any;
  KnowShortDetailsArray = Array();
  jsonData : any;
  constructor(private activatedRoute: ActivatedRoute,private support : SupportService) {

    this.activatedRoute.params.subscribe(params => {
      this.KnowID = params['id'];
    })

    this.support.getKnowledgebaseList().subscribe(data=>{
      this.jsonData = data;
      var data1 = this.jsonData['response'];
      this.FilterAdminSubCategoryData = data1['entries'];

        this.MainKnowDetails = this.FilterAdminSubCategoryData.filter((d: { kb_entry_id: string; }) => d.kb_entry_id === this.KnowID);
        this.FilterAdminSubCategoryData = this.FilterAdminSubCategoryData.filter((d: { parent_entry_id: string; }) => d.parent_entry_id === this.KnowID);
        this.OriginalData = this.FilterAdminSubCategoryData;
        console.log(this.FilterAdminSubCategoryData);
        this.FilterAdminSubCategoryData.forEach((element: any) => {
        this.KnowShortDetailsArray.push(element.content.replace(/<[^>]*>/g, '').substring(0,150))
      });      
    })
   }

  ngOnInit(): void {
  }
  search(data: string | any[],search: string) {
    console.log(data);
    var obj = [], index=0;
    debugger
    for(var i=0; i<data.length; i++) {
      debugger
      for(let key in data[i]){
        debugger
         if(data[i][key].toString().toLowerCase().indexOf(search.toLowerCase())!=-1) {
            obj[index] = data[i];
            index++;
            // break;
         }
     }
     
  }
  return obj;
}
  //Search artical list
  searchData(ele : any){
    if(ele.target.value == '')
    {
      this.FilterAdminSubCategoryData = this.OriginalData;
    }
    else
    {
      this.FilterAdminSubCategoryData = [];
      this.FilterAdminSubCategoryData = this.search(this.OriginalData,ele.target.value);
    }
  }
}
