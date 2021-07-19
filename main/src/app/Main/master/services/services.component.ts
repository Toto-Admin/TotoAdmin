import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { ServiceCategoryService } from '../../Services/servicemaster/service-category.service';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { User } from '../user';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  serviceForm: FormGroup | null = null;
  dtOptions: DataTables.Settings = {};
  ServicesList: any;
  popupTitle = "Add";
  btnTitle = "Save";
  categories: any;
  service: any = {};
  radioOptions = ['Hour', 'Minute'];

  constructor(private fb: FormBuilder, private modalService: NgbModal, private Services: ServiceCategoryService) {
   
    this.Services.getServices({ page: 0, limit: 100 }).then(data => {
      this.ServicesList = data.data;
      console.log("GridData");
      console.log(this.ServicesList);
      this.dtTrigger.next();
    })
    this.Services.getCategories().then((data) => {
      this.categories = data.data;
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
        { orderable: false, targets: [-1, -5] }
      ]

    };
    this.serviceForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      slug: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      duration_type: ['hour', [Validators.required]],
      price: ['', [Validators.required]],
      price_type: ['hour', [Validators.required]],
      description: [''],
      tool: [''],
      typical_scope: [''],
      categoryId: ['', [Validators.required]],
      image: [''],
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

  openModal(targetModal: NgbModal, service: any | null, title: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });    
    console.log(service);
    this.popupTitle = title;
    if (title == 'Edit') {
      this.btnTitle = 'Update';
      this.serviceForm?.setValue({
          id: service.id,
          name: service.name,
          slug: service.slug,
          duration:service.duration,
          duration_type: service.duration_type,
          price: service.price,
          price_type: service.price_type,
          description: service.description,
          tool: service.tool, 
          typical_scope: service.typical_scope,
          categoryId: service.categoryId,
          image: service.image,
      });
      this.service.image = service.image;
    }
  }
  closeBtnClick() {
    this.modalService.dismissAll();
    this.ngOnInit();
  }

  onSubmit() {    
    let id = '';
    let request: any = new Object();
    if (this.serviceForm?.controls['id'].value != '') {
      request['id'] = this.serviceForm?.controls['id'].value;
      id = this.serviceForm?.controls['id'].value;
    }
      request['categoryId'] = this.serviceForm?.controls['categoryId'].value;
      request['name'] = this.serviceForm?.controls['name'].value;
      request['slug'] = this.serviceForm?.controls['slug'].value;
      request['image'] = this.serviceForm?.controls['image'].value;
      request['description'] = this.serviceForm?.controls['description'].value;
      request['duration'] = this.serviceForm?.controls['duration'].value;
      request['tool'] = this.serviceForm?.controls['tool'].value;
      request['typical_scope'] = this.serviceForm?.controls['typical_scope'].value;
      request['duration_type'] = this.serviceForm?.controls['duration_type'].value;
      request['price'] = this.serviceForm?.controls['price'].value;
      request['price_type'] = this.serviceForm?.controls['price_type'].value;
    

    if (request['categoryId']) {
      request['categoryId'] = parseInt(request['categoryId']);
    }

    if ( request['duration']) {
      request['duration'] = (request['duration']).toString();
    }

    if (request['price']) {
      request['price'] = parseFloat(request['price']);
    }

    if (this.service.image) {
      request['image'] = this.service.image;
    }
    
    this.modalService.dismissAll();
    this.ngOnInit();
    this.Services.addServices(request).then((data) => {
      var msg = '';
      if (id != '' && id != undefined) {
        msg = 'Updated';
      }
      else {
        msg = 'Added';
      }
      Swal.fire({
        icon: 'success',
        title: 'Save',
        text: `Service ${msg}!`,
      })
      this.Services.getServices({ page: 0, limit: 100 }).then(data => {

        this.ServicesList = data.data;
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
        this.service.image = readerEvt.target.result;
      }
      reader.readAsDataURL(fileToLoad);
    }
  }
 
}
