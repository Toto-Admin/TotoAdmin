import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Chat } from '../../jobs/chat';
import { ChatMessages } from '../../jobs/chat-messages';
import { ContactList } from '../../jobs/contact-list';
import { NgbModal, NgbNavChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import { SupportService} from '../../Services/support.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  public config: PerfectScrollbarConfigInterface = {};

  public showSidebar = false;
  public now: Date | null = null;
  activeChatUserId = 1;
  activeChatUser: string | null | undefined = '';
  activeChatUserImg: string | null = '';
  activeChatUserStatus = '';

  @ViewChild('messageInput', { static: true })
  messageInputRef: ElementRef | null = null;

  messages = new Array();

  contactList: ContactList[] | null = null;

  savedMessages: Chat[] | null = null;

  currentJustify = 'start';

  active=1;

  activeKeep=1;

  activeSelected=1;
  disabled = true;

  
  tabs = [0,1,3,4];
  counter = this.tabs.length + 1;
  activeDynamic=1;
  custdata : any;
  ProviderTicketsID = Array();
  chatData : any;
  status : boolean = false;
  chatFinalData : any;
  chatMessageData : any;
  userID : any;
  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 3) {
      changeEvent.preventDefault();
    }
  }

  constructor(private support : SupportService) {

      //getTicketDetails 
      this.support.getTicketData().subscribe(data=>{
        this.custdata=data;
        this.custdata.forEach((element:any)=>{
            // .owner_contactid =='6b6litzr'
          if(element)
          {
            // debugger
            var data : any = element;
            this.ProviderTicketsID.push(data);

            if(this.ProviderTicketsID[0] !='')
            {
                if(this.status == false){
                    this.support.getChatDetailsbyTicketId(this.ProviderTicketsID[0].id).subscribe(data=>{
                        this.chatData = data;
                        var data1 = this.chatData['response'];
                        this.chatFinalData = data1['groups'];
                        this.status = true;
                        this.chatFinalData.forEach((element : any) => {
                            if(element.rtype == 'C'){
                                this.chatFinalData = element.messages;
                                this.userID = element.userid;
                            }
                        });
                    })
                }
            }
          }
        });
      })

      const chatMessage: ChatMessages = new ChatMessages();
      this.contactList = [
          {
              id: 1,
              imagePath: 'assets/images/users/1.jpg',
              name: 'Steve Rogers',
              signature: 'Hey Banner, where are you?',
              time: '9:30AM',
              chats: chatMessage.chat1,
          },
          {
              id: 2,
              imagePath: 'assets/images/users/2.jpg',
              name: 'Ram',
              signature: 'ram ram ram .....',
              time: '10:30AM',
              chats: chatMessage.chat2,
          },
          {
              id: 3,
              imagePath: 'assets/images/users/3.jpg',
              name: 'Shyam',
              signature: 'shyam shyam .....',
              time: '11:30AM',
              chats: chatMessage.chat3,
          },
          {
              id: 4,
              imagePath: 'assets/images/users/4.jpg',
              name: 'Mark',
              signature: 'mark mark ......',
              time: '8:30AM',
              chats: chatMessage.chat4,
          },
          {
              id: 5,
              imagePath: 'assets/images/users/5.jpg',
              name: 'Robin',
              signature: 'robin robin ......',
              time: '6:30AM',
              chats: chatMessage.chat5,
          }

      ];


      // tslint:disable-next-line:no-non-null-assertion
      this.activeChatUser = this.contactList!.find(x => x.id === 1)?.name;
      // tslint:disable-next-line:no-non-null-assertion
      this.activeChatUserImg = this.contactList!.find(x => x.id === 1)!.imagePath;
      // tslint:disable-next-line:no-non-null-assertion
      this.savedMessages = this.contactList!.find(x => x.id === 1)!.chats;



      this.activeChatUserStatus = 'Online';
  }

  ngOnInit() {

  }

  // chat user list click event function
  setActive(chatId: number) {

      this.savedMessages = new Array();
      this.messages = [];
      if (this.contactList !== null) {
          for (let i = 0; i < this.contactList.length; i++) {

              if (this.contactList[i].id === chatId) {
                  this.activeChatUserId = this.contactList[i].id;
                  this.activeChatUser = this.contactList[i].name;
                  this.activeChatUserImg = this.contactList[i].imagePath;
                  this.savedMessages = this.contactList[i].chats;

                  this.activeChatUserStatus = 'Online';
              }
          }
      }
  }



  onAddMessage() {

      if (this.messageInputRef?.nativeElement.value !== '') {
          this.messages.push(this.messageInputRef?.nativeElement.value);
      }
      if (this.messageInputRef !== null) {
          this.messageInputRef.nativeElement.value = '';
          this.messageInputRef.nativeElement.focus();
      }

      this.now = new Date();
  }

  mobileSidebar() {
      this.showSidebar = !this.showSidebar;
  }

  getChatDetails(ele:string){
    this.support.getChatDetailsbyTicketId(ele).subscribe(data=>{
        this.chatData = data;
        var data1 = this.chatData['response'];
        this.chatFinalData = data1['groups'];
        this.status = true;
        this.chatFinalData.forEach((element : any) => {
            if(element.rtype == 'C'){
                this.chatFinalData = element.messages;
                this.userID = element.userid;
            }
        });
    })
  }

}
