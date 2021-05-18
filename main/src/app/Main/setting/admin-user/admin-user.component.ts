import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { User } from '../user';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  regularForm: FormGroup=Object.create(null);
  radioOptions = ['Male', 'Female'];
 
  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;
  config: any;
  // editUser: FormGroup | null = null;
  userDetail: User | null = null;

  filterArray: User[] | null = null;

  joiningDate: string | null = null;
  editUser: FormGroup | null = null;
  dtOptions: DataTables.Settings = {};

  constructor(private fb: FormBuilder,private modalService: NgbModal,private router: Router) { }
  formsErrors = [];
  ngOnInit(): void {
    $('#backButton').show();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:10,
      ordering : true,
      lengthMenu :[[10,25,50,100,-1],[10,25,50,100,'All']],
      columnDefs: [
        { orderable: false, targets: -1 }
      ]
  
     
    };
  //   this.editUser = this.fb.group({
      
  //     reason: ['',[ Validators.required,Validators.pattern('[a-zA-Z ]*')]],
  //     type:['', Validators.required],
  // });
  this.regularForm = new FormGroup({
    'inputFirstname':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]),
    'inputLastname':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]),
    'inputEmail': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]),
    'mobile':new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),
    'dob': new FormControl(null,[Validators.required]),
    'role':new FormControl(null,[Validators.required]),
    'status':new FormControl(null,[Validators.required]),
    'pimg':new FormControl(null),
    'radioOption': new FormControl('Option one is this')
}, {updateOn: 'blur'});

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

  openModal(targetModal: NgbModal, user: User | null) {
    this.modalService.open(targetModal, {
        centered: true,
        backdrop: 'static'
    });
  }
  closeBtnClick() {
    this.modalService.dismissAll();
    this.ngOnInit();
  }
  
  onReactiveFormSubmit() {
    this.regularForm.reset();
}
cancelBtnClick(){
  this.router.navigate(['/setting/admin-user'])
}

  
}
