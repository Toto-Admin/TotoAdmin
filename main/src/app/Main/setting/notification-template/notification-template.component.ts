import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { NotificationTemplateService } from '../../Services/settings/notification-template.service';
import { User } from '../user';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-notification-template',
  templateUrl: './notification-template.component.html',
  styleUrls: ['./notification-template.component.css']
})
export class NotificationTemplateComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  config: any;
  // editUser: FormGroup | null = null;
  userDetail: User | null = null;

  filterArray: User[] | null = null;

  joiningDate: string | null = null;
  editUser: FormGroup | null = null;
  dtOptions: DataTables.Settings = {};

  notificationList : any;
  ModaleTitle ='Add';
  constructor(private fb: FormBuilder,private modalService: NgbModal,private router:Router,private notificationService : NotificationTemplateService) {
    this.notificationService.get({page :0 ,limit : 100}).then(data=>{
      this.notificationList = data.data;
      console.log(this.notificationList)
      this.dtTrigger.next();
    })
    
   }
  formsErrors = [];
  ngOnInit(): void {
    $('#backButton').hide();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:10,
      ordering : true,
      lengthMenu :[[10,25,50,100,-1],[10,25,50,100,'All']],
      columnDefs: [
        { orderable: false, targets: -1 }
      ]
     
     
    };
    this.editUser = this.fb.group({
      id : [''],
      name: ['',[ Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      title:['',[ Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      slug:['', Validators.required],
      body:[''],
  });
  }
  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.header()).on('keyup change', function () {
          debugger
          var data :any;
          data = $(this).val();
          if (that.search() !== data) {
            that
              .search(data)
              .draw();
          }
        });
      });
    });
  }

  openModal(targetModal: NgbModal, data : any, title : any) {
    this.modalService.open(targetModal, {
        centered: true,
        backdrop: 'static'
    });
    this.ModaleTitle = title
    this.editUser?.setValue({
      name    : data.name,
      id      : data.id,
      slug    : data.slug,
      body    : data.body,
      title   : data.title
    })
  }
  closeBtnClick() {
    this.modalService.dismissAll();
    this.ngOnInit();
  }
  sendnotification(){
    this.router.navigate(['/setting/notification']);
  }

  rerender(): void {
    //this.datatableElement is important
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  deleteNotification(ele: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, change it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.notificationService.delete(ele).then(data1 => {
          this.notificationService.get({ page: 0, limit: 100 }).then(data => {
            this.notificationList = data.data;
            this.rerender();
            Swal.fire(
              'Changed!',
              'Notification Template has been deleted.',
              'success'
            )
          })
        })
      }
    })
  }

    //Submit and Update Notification Template
    onSubmit(){
      debugger
      let data = this.editUser?.value;
      let id = '';
      if(this.editUser?.controls['id'].value == '')
      {
        delete data.id;
      }
      else
      {
        id = this.editUser?.controls['id'].value;
      }
    
      this.modalService.dismissAll();
      this.ngOnInit();
      this.notificationService.add(data).then(data=>{
        var msg = '';
          debugger
          if (id != '' && id != undefined) {
            msg = 'Updated';
          }
          else {
            msg = 'Added';
          }
          Swal.fire({
            icon: 'success',
            title: 'Save',
            text: `Email Template ${msg}!`,
          })
        this.notificationService.get({page : 0,limit:100}).then(data=>{
          this.notificationList = data.data;
          this.rerender();
        })
      })
    }

}
