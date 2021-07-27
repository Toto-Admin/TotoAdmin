import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { MarketingService } from '../../Services/marketing/marketing.service';
import { User } from '../user';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;
  config: any;
  // editUser: FormGroup | null = null;
  userDetail: User | null = null;
  filterArray: User[] | null = null;
  dtTrigger: Subject<any> = new Subject();
  joiningDate: string | null = null;
  editUser: FormGroup | null = null;
  dtOptions: DataTables.Settings = {};
  rewardList : any;
  image : any;
  popupTitle : any;
  btnTitle : any;

  constructor(private fb: FormBuilder,private modalService: NgbModal, private marketingService : MarketingService) { 
    this.marketingService.getAllRewards({page : 0, limit : 200}).then(data=>{
      this.rewardList = data.data;
      this.dtTrigger.next();

      console.log(this.rewardList);
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
        { orderable: false, targets: [-1,-3] }
      ]
     
    };
    this.editUser = this.fb.group({
      id:[],
      name: ['', Validators.required],
      amount:['', [Validators.required]],
      image:['',Validators.required],
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

  setImage($event : any) {
    if ($event.target.files.length > 0) {
      var fileToLoad = $event.target.files[0];
      var reader: FileReader = new FileReader();
      reader.onloadend = (readerEvt: any) => {
        this.image = readerEvt.target.result;
      }
      reader.readAsDataURL(fileToLoad);
    }
  }

  openModal(targetModal: NgbModal, data : any,title : any) {
    this.modalService.open(targetModal, {
        centered: true,
        backdrop: 'static'
    });

    this.popupTitle = title;
    if (title == 'Edit') {
      this.btnTitle = 'Update';
      this.editUser?.setValue({
        name: data.name,
        amount: data.amount,
        image: data.image,
        id: data.id
      })
      this.image = data.image
    }
    {
      this.btnTitle = 'Submit';
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

  deleteReward(ele : any){
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
        this.marketingService.deleteReward(ele).then(data1 => {
          this.marketingService.getAllRewards({ page: 0, limit: 200 }).then(data => {
            this.rewardList = data.data;
            this.rerender();
            Swal.fire(
              'Deleted!',
              'Reward has been deleted.',
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
    data['image'] = this.image;
    let id = '';
    console.log(data);
    if (this.editUser?.controls['id'].value != '') {
      data['id'] = this.editUser?.controls['id'].value;
      id = this.editUser?.controls['id'].value;
    }
    this.modalService.dismissAll();
    this.ngOnInit();

    this.marketingService.addReward(data).then(data => {
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
      this.marketingService.getAllRewards({ page: 0, limit: 200 }).then(data => {
        this.rewardList = data.data;
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
