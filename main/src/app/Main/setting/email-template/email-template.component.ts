import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { EmailTemplateService } from '../../Services/settings/email-template.service';
import { User } from '../user';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.css']
})
export class EmailTemplateComponent  { 
  
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
  emailTemplateList : any;
  ModaleTitle : any;

  constructor(private fb: FormBuilder,private modalService: NgbModal, private emailService : EmailTemplateService) {
      this.emailService.get({page : 0,limit:100}).then(data=>{
        this.emailTemplateList = data.data;
        this.dtTrigger.next();
      }).catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `${error}`,
        })
      });
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
      _id     : [''],
      name    : ['',[ Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      subject : ['',[ Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      slug    : ['', Validators.required],
      body    : [''],
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

  openModal(targetModal: NgbModal, data:any,title : any) {
    this.modalService.open(targetModal, {
        centered: true,
        backdrop: 'static'
    });

    this.ModaleTitle = title
    this.editUser?.setValue({
      name    : data.name,
      _id     : data._id,
      slug    : data.slug,
      body    : data.body,
      subject : data.subject
    })
  }
  closeBtnClick() {
    this.modalService.dismissAll();
    this.ngOnInit();
  }

  rerender(): void {
    //this.datatableElement is important
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  deleteCategory(ele: any) {
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
        this.emailService.delete(ele).then(data1 => {
          this.emailService.get({ page: 0, limit: 100 }).then(data => {
            this.emailTemplateList = data.data;
            this.rerender();
            Swal.fire(
              'Changed!',
              'Email Template has been deleted.',
              'success'
            )
          }).catch((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: `${error}`,
            }) 
          });
        })
      }
    })
  }

  //Submit and Update Email Template
  onSubmit(){
    let data = this.editUser?.value;
    let id = '';
    if(this.editUser?.controls['_id'].value == '')
    {
      delete data._id;
    }
    else
    {
      id = this.editUser?.controls['_id'].value;
    }
  
    this.modalService.dismissAll();
    this.ngOnInit();
    this.emailService.add(data).then(data=>{
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
      this.emailService.get({page : 0,limit:100}).then(data=>{
        this.emailTemplateList = data.data;
        this.rerender();
      })
    }).catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `${error}`,
      }) 
    });
  }
 
}
