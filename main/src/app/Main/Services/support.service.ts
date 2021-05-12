import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map, retry} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { id } from 'date-fns/locale';
@Injectable({
  providedIn: 'root'
})
export class SupportService {

  url : any;
  url1 : any;
  apiKey : any;

  localUrl : string = 'http://localhost';
  ServerUrl : string = "https://sharecards.in";

  // Liveagent api call below
  constructor(private httpClient:HttpClient) {
     this.url = 'https://ajit.ladesk.com/api/v3';
     this.url1 = 'https://ajit.ladesk.com/api';
     this.apiKey = '8774gxnfw4bk9lqpc6du9v0laz6xe5t9';
   }

    AllTicket():Observable<any>{
      let httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json',
        'apikey'       : 'rrk9g42k0lc03io20h8512iswqn22c7j',
      })
      
      let result = this.httpClient.get(this.url+'/tickets',{headers:httpHeaders});
      return result;
    }

    getTicketData(){
      let result = this.httpClient.get(this.ServerUrl+'/api/ticket.php');
      return result;
    }

    getKnowledgebaseList(){
      let result = this.httpClient.get(this.ServerUrl+'/api/knowledgebase.php');
      return result;
    }
    
    getTicketByIdData(){
      let result = this.httpClient.get(this.ServerUrl+'/api/byid.php');
      return result;
    }

    //get chat details
    getChatDetailsbyTicketId(id:string){
      let result = this.httpClient.get(this.ServerUrl+'/api/chatDetails.php?id='+id);
      return result;
    }
}
