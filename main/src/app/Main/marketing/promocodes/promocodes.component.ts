import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { User } from '../user';
import { Subject } from 'rxjs';
import { MarketingService } from '../../Services/marketing/marketing.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-promocodes',
  templateUrl: './promocodes.component.html',
  styleUrls: ['./promocodes.component.css']
})
export class PromocodesComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;
  config: any;
  // editUser: FormGroup | null = null;
  userDetail: User | null = null;

  filterArray: User[] | null = null;

  joiningDate: string | null = null;
  editUser: FormGroup | null = null;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  promocodeList : any;
  popupTitle : any;
  fixed : boolean = false;

  constructor(private fb: FormBuilder,private modalService: NgbModal, private marketingService : MarketingService) { 
    this.marketingService.getPromocodes({page : 0, limit : 200}).then(data=>{
      this.promocodeList = data.data;
      this.dtTrigger.next();
      console.log(this.promocodeList);
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
      id:[''],
      name: ['',[ Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      uses:['', Validators.required],
      max_uses:['',Validators.required],
      max_uses_user:['',Validators.required],
      discount_type:['',Validators.required],
      discount_amount:['',Validators.required],
      description:['',Validators.required],
      starts_at:['',Validators.required],
      expires_at:['',Validators.required],
      is_fixed : ['']

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
    console.log(data)
    this.popupTitle = title;
    if (title == 'Edit') {
      let fixed = ''
      if(data.is_fixed == 1)
      {
        this.fixed = true;
      }
      else
      {
        this.fixed = false;
      }
      this.editUser?.setValue({
        name: data.name,
        id: data.id,
        expires_at : data.expires_at,
        starts_at : data.starts_at,
        description : data.description,
        discount_amount : data.discount_amount,
        discount_type : data.discount_type,
        max_uses_user : data.max_uses_user,
        max_uses : data.max_uses,
        uses : data.uses,
        is_fixed : this.fixed
      })

    }
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

  deletePromoCode(ele : any){
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
        this.marketingService.deletePromoCode(ele).then(data1 => {
          this.marketingService.getPromocodes({ page: 0, limit: 200 }).then(data => {
            this.promocodeList = data.data;
            this.rerender();
            Swal.fire(
              'Deleted!',
              'Promo code has been deleted.',
              'success'
            )
          })
        })
      }
    }).catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `${error}`,
      }) 
    });
  }

  onSubmit(){
    let data = this.editUser?.value;
    let id = '';
    data['users'] = [];
    if (this.editUser?.controls['id'].value != '') {
      data['id'] = this.editUser?.controls['id'].value;
      id = this.editUser?.controls['id'].value;
    }
    else
    {
      delete data.id;
    }

    data['max_uses'] = data.max_uses.toString();
    data['max_uses_user'] = data.max_uses_user.toString();
    if(data.is_fixed == true)
    {
      data['is_fixed'] = 1;
    }else{
      data['is_fixed'] = 0;
    }
    this.modalService.dismissAll();
    this.ngOnInit();

    this.marketingService.addPromoCode(data).then(data => {
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
        text: `Promo code ${msg}!`,
      })
      this.marketingService.getPromocodes({ page: 0, limit: 200 }).then(data => {
        this.promocodeList = data.data;
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
