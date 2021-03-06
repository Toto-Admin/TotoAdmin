import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { User } from '../user';
import { SupportService } from '../../Services/support.service';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {

  
  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;
  config: any;
  userDetail: User | null = null;
  filterArray: User[] | null = null;
  joiningDate: string | null = null;
  editUser: FormGroup | null = null;
  dtOptions: DataTables.Settings = {};

  //Knowledgebase Details
  FilterAdminSubCategoryData : any;
  jsonData : any;

  constructor(private fb: FormBuilder,private modalService: NgbModal,private support : SupportService) {
    
    this.support.getKnowledgebaseList().subscribe(data=>{
      this.jsonData = data;
      var data1 = this.jsonData['response'];
      this.FilterAdminSubCategoryData = data1['entries'];
      console.log(this.FilterAdminSubCategoryData);
      this.FilterAdminSubCategoryData = this.FilterAdminSubCategoryData.filter((d: { parent_entry_id: string; }) => d.parent_entry_id === '2');
      console.log(this.FilterAdminSubCategoryData);

    })

    this.support.getTicketData().subscribe(data=>{
      // debugger
      // console.log('/////////////////////////');
      // console.log(data);
      // console.log('=========================');
    })

   }








  formsErrors = [];
  ngOnInit(): void {
    $('#backButton').hide();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:8,
      ordering : true,
      lengthMenu :[[8,25,50,100,-1],[8,25,50,100,'All']],
      columnDefs: [
        { orderable: false, targets: [-1,-2] }
      ]
  

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
