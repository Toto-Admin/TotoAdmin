import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { AdminUserService } from '../../Services/settings/admin-user.service';
import { User } from '../user';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  regularForm: FormGroup = Object.create(null);
  radioOptions = ['Male', 'Female'];

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
  AdminUserList: any;
  profile_pic: any;
  ModaleTitle = '';

  constructor(private fb: FormBuilder, private modalService: NgbModal, private router: Router, private adminServices: AdminUserService) {
    this.adminServices.getAdminUsers({ page: 0, limit: 100 }).then(data => {
      this.AdminUserList = data.data;
      this.dtTrigger.next();
      console.log(this.AdminUserList);
    })
  }
  formsErrors = [];
  ngOnInit(): void {
    $('#backButton').hide();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      ordering: true,
      lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, 'All']],
      columnDefs: [
        { orderable: false, targets: -1 }
      ]
    };
    this.regularForm = new FormGroup({
      'id': new FormControl(),
      'first_name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]),
      'last_name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]),
      'phone': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),
      'dob': new FormControl(null, [Validators.required]),
      'role_id': new FormControl(null, [Validators.required]),
      'status': new FormControl(null, [Validators.required]),
      'gender': new FormControl()
    }, { updateOn: 'blur' });

  }
  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.header()).on('keyup change', function () {
          debugger
          var data: any;
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

  openModal(targetModal: NgbModal, data: any, title: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
    this.ModaleTitle = title
    if(title == 'Edit')
    {
      this.regularForm?.setValue({
        first_name : data.first_name,
        last_name  : data.last_name,
        id         : data.id,
        email      : data.email,
        password   : data.password,
        phone      : data.phone,
        status     : data.status,
        gender     : data.gender,
        role_id    : data.role_id,
        dob        : data.dob
      })
    }
  }
  closeBtnClick() {
    this.modalService.dismissAll();
    this.ngOnInit();
  }

  onReactiveFormSubmit() {
    this.regularForm.reset();
  }
  cancelBtnClick() {
    this.router.navigate(['/setting/admin-user'])
  }

  rerender(): void {
    //this.datatableElement is important
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  setProfilePic($event: any) {
    if ($event.target.files.length > 0) {
      var fileToLoad = $event.target.files[0];
      var reader: FileReader = new FileReader();
      reader.onloadend = (readerEvt: any) => {
        this.profile_pic = readerEvt.target.result;
      }
      reader.readAsDataURL(fileToLoad);
    }
  }

  deleteUser(ele: any) {
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
        this.adminServices.deleteUser(ele).then(data1 => {
          this.adminServices.getAdminUsers({ page: 0, limit: 100 }).then(data => {
            this.AdminUserList = data.data;
            this.rerender();
            Swal.fire(
              'Deleted!',
              'User has been deleted.',
              'success'
            )
          })
        })
      }
    })
  }

  blockUser(ele: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be status",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, change it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.adminServices.blockUser(ele).then(data1 => {
          this.adminServices.getAdminUsers({ page: 0, limit: 100 }).then(data => {
            this.AdminUserList = data.data;
            this.rerender();
            Swal.fire(
              'Changed!',
              'User has been changed.',
              'success'
            )
          })
        })
      }
    })
  }

  activeUser(ele: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be status",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, change it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.adminServices.activeUser(ele).then(data1 => {
          this.adminServices.getAdminUsers({ page: 0, limit: 100 }).then(data => {
            this.AdminUserList = data.data;
            this.rerender();
            Swal.fire(
              'Changed!',
              'User has been changed.',
              'success'
            )
          })
        })
      }
    })
  }

  onSubmit() {
    debugger
    let data = this.regularForm.value;
    console.table(data);
    if (this.profile_pic != '') {
      data['profile_pic'] = this.profile_pic;
    }

    let id = '';
    if (this.regularForm?.controls['id'].value == '') {
      delete data.id;
    }
    else {
      id = this.regularForm?.controls['id'].value;
    }

    this.modalService.dismissAll();
    this.ngOnInit();
    let role = data.role_id;
    let role_id = parseInt(role);
    delete data.role_id;
    data['role_id'] = role_id;
    this.adminServices.addUser(data).then(data => {
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
        text: `Admin user ${msg}!`,
      })
      this.adminServices.getAdminUsers({ page: 0, limit: 100 }).then(data => {
        this.AdminUserList = data.data;
        this.rerender();
      })
    })
  }


}
