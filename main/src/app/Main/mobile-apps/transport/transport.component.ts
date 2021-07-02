import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { TransportService } from '../../Services/mobile-apps/transport.service';
import { User } from '../user';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {
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
  transportList: any;
  transportImage :any;
  dataSet : any;
  TitleName : string = 'Add';

  constructor(private fb: FormBuilder, private modalService: NgbModal, private transport: TransportService) {
    this.transport.getTranspotationData({ page: 0, limit: 20 }).then(data => {
      this.transportList = data.data;
      console.log(this.transportList);
      this.dtTrigger.next()
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
        { orderable: false, targets: [-1, -2] }
      ]

    };
    this.editUser = this.fb.group({
      id : [''],
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      images : ['',Validators.required]
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

  openModal(targetModal: NgbModal, reason : any,title : any) {
    this.TitleName = title;
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
    if (title == 'Edit') {
      this.editUser?.setValue({
        name : reason.name,
        id   : reason.id,
        images : reason.image

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
        this.transport.deleteTranspotations(ele).then(data1 => {
          this.transport.getTranspotationData({ page: 0, limit: 100 }).then(data => {
            this.transportList = data.data;
            this.rerender();
            Swal.fire(
              'Deleted!',
              'Your Transport option has been deleted.',
              'success'
            )
          })
        })
      }
    })
  }

  setImage($event : any) {
    if ($event.target.files.length > 0) {
      var fileToLoad = $event.target.files[0];
      var reader: FileReader = new FileReader();
      reader.onloadend = (readerEvt: any) => {
        this.transportImage = readerEvt.target.result;
      }
      reader.readAsDataURL(fileToLoad);
    }
  }
  onSubmit() {
    console.log(this.editUser?.value);
    this.dataSet = this.editUser?.value;
    this.dataSet['image'] = this.transportImage;
    console.log(this.dataSet);
    delete this.dataSet.images;
    if(this.dataSet.id == '')
    {
      delete this.dataSet.id;
    }
    let id ='';

    if (this.editUser?.controls['id'].value != '') {
      id = this.editUser?.controls['id'].value;
      this.dataSet['id'] = this.editUser?.controls['id'].value

    }

    this.modalService.dismissAll();
    this.ngOnInit();

    console.log(this.dataSet)
    this.transport.addTranspotations(this.dataSet).then(data => {
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
        text: `Transport option ${msg}!`,
      })
      this.transport.getTranspotationData({ page: 0, limit: 100 }).then(data => {
        this.transportList = data.data;
        this.rerender();
      })
    })

  }
}
