import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { MobileContentService } from '../../Services/mobile-apps/mobile-content.service';
import { User } from '../user';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-mobile-content',
  templateUrl: './mobile-content.component.html',
  styleUrls: ['./mobile-content.component.css']
})
export class MobileContentComponent implements OnInit {

 

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
  Modal_title = '';

  MobileContentList : any;

  constructor(private fb: FormBuilder,private modalService: NgbModal,private mobileContentServices : MobileContentService ) {
      this.mobileContentServices.getAllPage({page : 0,limit : 100}).then(data=>{
        this.MobileContentList = data.data;
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
      id: [''],
      name: ['',[ Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      title: ['',[ Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      slug:[''],
      typeOfUser:['', Validators.required],
      platform:['', Validators.required],
      content: ['', Validators.required],
      meta_keyword: [''],
      meta_title: [''],
      meta_description: [''],
      // Salary: ['', Validators.required],
      // Projects: ['', Validators.required],
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
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  openModal(targetModal: NgbModal, reason : any, title: any) {
    debugger
    this.Modal_title = title;
    this.modalService.open(targetModal, {
        centered: true,
        backdrop: 'static'
    });
    if (title == 'Edit') {
      this.editUser?.setValue({
        name : reason.name,
        title: reason.title,
        slug: reason.slug,
        platform : reason.platform,
        typeOfUser : reason.typeOfUser,
        content : reason.content,
        meta_keyword:reason.meta_keyword,
        meta_title : reason.meta_title,
        meta_description :reason.meta_description,
        id: reason.id
      })
    }
  }
  closeBtnClick() {
    this.modalService.dismissAll();
    this.ngOnInit();
  }

    //delete Like reason
    deleteLikeReason(ele: any) {
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
          this.mobileContentServices.deletePage(ele).then(data1 => {
            this.mobileContentServices.getAllPage({ page: 0, limit: 100 }).then(data => {
              this.MobileContentList = data.data;
              this.rerender();
              Swal.fire(
                'Deleted!',
                'Your content has been deleted.',
                'success'
              )
            })
          })
        }
      })
    }

    rerender(): void {
      //this.datatableElement is important
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      });
    }
  

      //Add New Like Reason
  onSubmit() {
    debugger
    let id = '';
    let reason = this.editUser?.value;

    // reason['review_star'] = this.editUser?.controls['review_star'].value;
    if (this.editUser?.controls['id'].value != '') {
      id = this.editUser?.controls['id'].value;
    }

    this.modalService.dismissAll();
    this.ngOnInit();

    this.mobileContentServices.addPage(reason).then(data => {
      var msg = '';
      debugger
      if (id != '' && id != undefined) {
        msg = 'updated';
      }
      else {
        msg = 'added';
      }
      Swal.fire({
        icon: 'success',
        title: 'Save',
        text: `Mobile Content ${msg}!`,
      })
      this.mobileContentServices.getAllPage({ page: 0, limit: 100 }).then(data => {
        this.MobileContentList = data.data;
        this.rerender();
      })
    })
  }

}
