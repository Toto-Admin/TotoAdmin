import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import {UserPermissionService} from '../../Services/settings/user-permission.service';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-permission',
  templateUrl: './user-permission.component.html',
  styleUrls: ['./user-permission.component.css']
})
export class UserPermissionComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;  
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  roles=Array();  
  isSlug: number = 0;
  ispermission: number = 0;
  role_id: any = null;
  all_permission_data: Array<any> = [];
  selected_permissions: Array<any> = [];
  user_role: any = {};
  popupTitle="Add";
  btnTitle="Save";
  editPermission: FormGroup | null = null;
  constructor(private fb: FormBuilder,private modalService: NgbModal,private router:Router, private rolesService: UserPermissionService) {
    this.rolesService.getAllRoles().then(data => {
      this.roles = data;
      this.dtTrigger.next();
    });
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

  openModal(targetModal: NgbModal, id: any | null,title: any) {
    this.modalService.open(targetModal, {
        centered: true,
        backdrop: 'static'
    });
    this.popupTitle = title;  
    this.btnTitle = "Add";  
      // if (title="Edit") {
      // this.btnTitle = "Update";
      //     this.rolesService.getRole(parseInt(id)).then(role => {
      //         this.user_role = role.data;
      //     }); 
      //   }  
       this.getPermissions();
       this.rolesService.$permissions.subscribe((data: any) => {
         
          this.all_permission_data = data.map((item:any) => {
              item.checked = false;
              return item;
        });
        console.log("Data");
        console.log(this.all_permission_data);
          // if(this.user_role.id){
          //     setTimeout(() => { this.updateViewPermissions(); }, 500);
          // }        
         });      
  }

  closeBtnClick() {
    this.modalService.dismissAll();
    this.ngOnInit();
  }
  
  //get permissions
  getPermissions() {
    this.rolesService.getPermissions();
  }

  //Checkbox check and uncheck.
  groupBychecked(event:any, name:any) {
    this.all_permission_data.filter((element) => {
        if (element.id == name) {
            if (event.checked) {
                element.checked = true;
            } else {
                element.checked = false;
            }
            alert(element.checked)
        }
    });
}

  //
//   updateViewPermissions() {
//     if (this.all_permission_data.length > 0) {
//         console.log(this.user_role, 'this.user_role');
        
//         this.all_permission_data = this.all_permission_data.filter((item) => {
//             let flag: boolean = false;
//             this.user_role.roleHasPermissions.forEach(element => {
//                 if (!flag) {
//                     flag = element.permissionId == item.id
//                 }
//             });
//             item.checked = flag
//             return item
//         })
//     }
// }

  //Add Edit Permissions.
  addRole() {
    console.log("After Submit");
    console.log(this.selected_permissions);
    let permissions = this.all_permission_data.map((item) => {
        if (item.checked) {
            return item.id;
        }
    });
    let request = { name: '', permissions:{}, id: '' };
    this.selected_permissions = permissions.filter(per => per != undefined)
    request.name = this.user_role.name;
    request.permissions = this.selected_permissions;
    if (this.user_role.id) {
        request.id = this.user_role.id;
    }
    if (this.user_role.id == 2 || this.user_role.id == 3){
        this.rolesService.addRole(request).then((data) => {
            Swal.fire({
              icon: 'success',
              title: 'Save',
              text: `Block Reason ${data.message}!`,
            })
            this.router.navigate(['roles']);
        });
        // .catch((err) => {});
    }
   
    if(this.selected_permissions.length > 0) {
        this.rolesService.addRole(request).then((data) => {
          Swal.fire({
            icon: 'success',
            title: 'Save',
            text: `Block Reason ${data.message}!`,
          });
          this.router.navigate(['roles']);
        })
        // .catch((err) => {});
    }
}

}
