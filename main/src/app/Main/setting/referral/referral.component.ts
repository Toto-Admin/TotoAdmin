import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { User } from '../user';
import { Subject } from 'rxjs';
import { EmailTemplateService } from '../../Services/settings/email-template.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.css']
})
export class ReferralComponent implements OnInit {

 
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
  refferalList : any;

  constructor(private fb: FormBuilder,private modalService: NgbModal,private Services : EmailTemplateService) {
      this.Services.getReferrals({page : 0,limit:200}).then(data=>{
        this.refferalList = data.data;
        console.log(this.refferalList);

        this.dtTrigger.next()
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
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:10,
      ordering : true,
      lengthMenu :[[10,25,50,100,-1],[10,25,50,100,'All']],
     
    };
    this.editUser = this.fb.group({
      id: [''],
      Name: ['', Validators.required],
      Position: ['', Validators.required],
      Email: ['', Validators.required],
      Mobile: ['', Validators.required],
      DateOfJoining: ['', Validators.required],
      Salary: ['', Validators.required],
      Projects: ['', Validators.required],
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

}
