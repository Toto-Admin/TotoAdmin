import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { User } from '../user';
import { LikeReasonService } from '../../Services/mobile-apps/like-reason.service';
import { Subject } from 'rxjs';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-like-reason',
  templateUrl: './like-reason.component.html',
  styleUrls: ['./like-reason.component.css']
})
export class LikeReasonComponent implements OnInit,OnDestroy {

  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;

  config: any;
  title : any = 'Add';

  //Like Reason Data
  likeReason : any;
  checkedStatus : boolean = true;
  // editUser: FormGroup | null = null;
  userDetail: User | null = null;

  filterArray: User[] | null = null;

  joiningDate: string | null = null;
  editUser: FormGroup | null = null;
  dtElement!: DataTableDirective;
  dtOptions: any = {};
  dtInstance!: DataTables.Api;
  dtTrigger: Subject<any> = new Subject();


  constructor(private fb: FormBuilder,private modalService: NgbModal,private likeService : LikeReasonService) { 
      this.likeService.getLikeReasons({page: 0, limit: 20}).then(data=>{
          this.likeReason = data.data;
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
      id          : [''],
      reason      : ['',[ Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      type        : ['', [Validators.required]],
      review_star : ['', [Validators.required]],
      status      : ['']
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

  openModal(targetModal: NgbModal, reason : any,title : any) {
    this.title = title;
    this.modalService.open(targetModal, {
        centered: true,
        backdrop: 'static'
    });
    if(title == 'Edit')
    {
      this.editUser?.setValue({
        reason      : reason.reason,
        type        : reason.type,
        status      : reason.status,
        review_star : reason.review_star,
        id          : reason.id
      })
      if(reason.status == 'active')
      {
        $("#check").prop("checked", true);
      }
      else
      {
        this.checkedStatus = false;
        $("#check").prop("checked", false);

      }
    }
  } 
  closeBtnClick() {
    this.modalService.dismissAll();
    this.ngOnInit();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  } 

  //delete Like reason
  deleteLikeReason(ele:any)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.likeService.deleteLikeReason(ele).then(data1=>{
          this.likeService.getLikeReasons({page: 0, limit: 20}).then(data=>{
            this.likeReason = data.data;
            this.rerender();
            Swal.fire(
              'Deleted!',
              'Your reason has been deleted.',
              'success' 
            )
          })
        })
      }
    })
  }

  //Add New Like Reason
  onSubmit()
  {
   
    let reason : any = new Object();

    let status = this.editUser?.controls['status'].value;
    let statusData = '';

    if(status == true)
    {
      statusData = 'active';
    }
    else
    {
      statusData = 'inactive';
    }

    reason['reason'] = this.editUser?.controls['reason'].value;
    reason['type'] = this.editUser?.controls['type'].value;
    reason['status'] = statusData;
    reason['review_star'] = this.editUser?.controls['review_star'].value;
    if(this.editUser?.controls['id'].value !='')
    {
      reason['id'] = this.editUser?.controls['id'].value;
    }

    console.log(reason)
    this.modalService.dismissAll();
    this.ngOnInit();

    this.likeService.addLikeReason(reason).then(data=>{
      var msg = '';
      debugger
      let id = this.editUser?.controls['id'].value;
      if(reason.id != '' && reason.id != undefined)
      {
        msg = 'updated';
      }
      else
      {
        msg = 'added';
      }
      Swal.fire({
        icon: 'success',
        title: 'Save',
        text: `Like Reason ${msg}!`,
      })
      this.likeService.getLikeReasons({page: 0, limit: 20}).then(data=>{

        this.likeReason = data.data;
        this.rerender();
      })
    })
  }

  rerender(): void {
    //this.datatableElement is important
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }
}
