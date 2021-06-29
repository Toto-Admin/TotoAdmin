import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { CancelReasonService } from '../../Services/mobile-apps/cancel-reason.service';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cancel-reason',
  templateUrl: './cancel-reason.component.html',
  styleUrls: ['./cancel-reason.component.css']
})
export class CancelReasonComponent implements OnInit {


  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;
  joiningDate: string | null = null;
  editUser: FormGroup | null = null;
  dtOptions: DataTables.Settings = {};
  cancelReason: any;
  dtTrigger: Subject<any> = new Subject();
  statusData: string = 'Inactive';
  isChecked: boolean = false;
  popupTitle = 'Add';
  btnTitle = 'Save';


  constructor(private fb: FormBuilder, private modalService: NgbModal, private cancelServices: CancelReasonService) {
    this.cancelServices.getReasons({ page: 0, limit: 100 }).then(data => {
      this.cancelReason = data.data;
      console.log(this.cancelReason);
      this.dtTrigger.next();
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
    this.editUser = this.fb.group({
      id: [''],
      reason: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      type: ['', Validators.required],
      status: [false]
    });
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
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  openModal(targetModal: NgbModal, reason: any, title: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });

    this.popupTitle = title;
    if (title == 'Edit') {
      this.btnTitle = 'Update';
      this.editUser?.setValue({
        reason: reason.reason,
        type: reason.type,
        status: reason.status,
        id: reason.id
      })
      if (reason.status == 'active') {
        this.isChecked = true;
        this.statusData = 'Active';
        $("#check").prop("checked", true);
      }
      else {
        this.isChecked = false;
        this.statusData = 'Inactive';
        // this.checkedStatus = false;
        $("#check").prop("checked", false);

      }
    }
  }

  closeBtnClick() {
    this.modalService.dismissAll();
    this.ngOnInit();
  }

  //Status checkbox check or uncheck call this funcation
  changeStatus(ele: any) {
    this.isChecked = ele.target.checked;
    if (this.isChecked == true) {
      this.statusData = 'active';
    }
    else {
      this.statusData = 'inactive';
    }
  }

  //Add New Like Reason
  onSubmit() {
    debugger
    let id = '';
    let reason: any = new Object();
    let status = this.editUser?.controls['status'].value;
    let statusData = '';

    if (this.isChecked == true) {
      statusData = 'active';
    }
    else {
      statusData = 'inactive';
    }

    reason['reason'] = this.editUser?.controls['reason'].value;
    reason['type'] = this.editUser?.controls['type'].value;
    reason['status'] = statusData;
    // reason['review_star'] = this.editUser?.controls['review_star'].value;
    if (this.editUser?.controls['id'].value != '') {
      reason['id'] = this.editUser?.controls['id'].value;
      id = this.editUser?.controls['id'].value;
    }

    console.log(reason)
    this.modalService.dismissAll();
    this.ngOnInit();

    this.cancelServices.addReason(reason).then(data => {
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
        text: `Cancel Reason ${msg}!`,
      })
      this.cancelServices.getReasons({ page: 0, limit: 100 }).then(data => {

        this.cancelReason = data.data;
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
        this.cancelServices.deleteReason(ele).then(data1 => {
          this.cancelServices.getReasons({ page: 0, limit: 100 }).then(data => {
            this.cancelReason = data.data;
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

}
