import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { ServiceCategoryService } from '../../Services/servicemaster/service-category.service';
import { User } from '../user';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  
  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  config: any;
  userDetail: User | null = null;
  filterArray: User[] | null = null;
  joiningDate: string | null = null;
  editUser: FormGroup | null = null;
  dtOptions: DataTables.Settings = {};
  CategoryList : any;
  cateImage : any;

  constructor(private fb: FormBuilder,private modalService: NgbModal,private Services : ServiceCategoryService) { 
    this.Services.getCategories({page : 0,limit : 100}).then(data=>{
      this.CategoryList = data.data;
      this.dtTrigger.next()
      console.log(this.CategoryList)
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
        { orderable: false, targets: [-1,-4] }
      ]
    };
    this.editUser = this.fb.group({
      id :  [''],
      name: ['',[ Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      slug:['', Validators.required],
      description:['', Validators.required],
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
    this.modalService.open(targetModal, {
        centered: true,
        backdrop: 'static'
    });
    if (title == 'Edit') {
      this.editUser?.setValue({
        name : reason.name,
        id   : reason.id,
        slug : reason.slug,
        description : reason.description
      })
    }
  }
  closeBtnClick() {
    this.modalService.dismissAll();
    this.ngOnInit();
  }

  deleteCategory(ele: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be Inactive this category!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, change it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.Services.deleteCategory(ele).then(data1 => {
          this.Services.getCategories({ page: 0, limit: 100 }).then(data => {
            this.CategoryList = data.data;
            this.rerender();
            Swal.fire(
              'Changed!',
              'Categories has been changed.',
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

  reStoreCat(ele: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be Active this category!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, change it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.Services.restoreCategory(ele).then(data1 => {
          this.Services.getCategories({ page: 0, limit: 100 }).then(data => {
            this.CategoryList = data.data;
            this.rerender();
            Swal.fire(
              'Changed!',
              'Categories has been changed.',
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



  rerender(): void {
    //this.datatableElement is important
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  
  setProfilePic($event : any) {
    if ($event.target.files.length > 0) {
      var fileToLoad = $event.target.files[0];
      var reader: FileReader = new FileReader();
      reader.onloadend = (readerEvt: any) => {
        this.cateImage = readerEvt.target.result;
      }
      reader.readAsDataURL(fileToLoad);
    }
  }


  onSubmit()
  {
      let data = this.editUser?.value;
      data['image'] = this.cateImage;

      let id = '';
      if(this.editUser?.controls['id'].value == '')
      {
        delete data.id;
      }
      else
      {
        id = this.editUser?.controls['id'].value;
      }
      this.modalService.dismissAll();
      this.ngOnInit();
      this.Services.addCategory(data).then(data=>{
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
        this.Services.getCategories({page : 0,limit : 100}).then(data=>{
          this.CategoryList = data.data;
          this.rerender();        
        })
      })
  }
}
