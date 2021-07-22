import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from '../../Services/provider/provider.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;
  documentList: any;
  rejectedReason = '';
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  userId : any;



  constructor(private activatedRoute: ActivatedRoute, private providerServices: ProviderService) {
    this.activatedRoute.params.subscribe((params: any) => {

      if (params.id) {
        this.userId = params.id;
        this.providerServices.viewContractor(parseInt(params.id)).then(contractor => {
          this.documentList = contractor.userAttachments;
          this.dtTrigger.next();
          console.log(this.documentList);

        }).catch((error) => {
          //  this.helper.errorMessage({ message: error.message });
        });
      }
    })
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      ordering: true,
      lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, 'All']],
      columnDefs: [
        { orderable: false, targets: -1 }
      ]
    };
  }

  documentReject(id : any) {
    let rejectedReason = this.rejectedReason;
    this.providerServices.documentReject(parseInt(id), this.rejectedReason).then(response => {
      this.providerServices.viewContractor(parseInt(this.userId)).then(contractor => {
        this.documentList = contractor.userAttachments;
        this.rerender();
        Swal.fire(
          'Rejected!',
          'Document has been rejected.',
          'success'
        )
      })
    }).catch((error) => {
    });
  }

  documentVerification(id: any, status: any) {
    this.providerServices.verifyAttachment(parseInt(id), status).then(response => {
      this.providerServices.viewContractor(parseInt(this.userId)).then(contractor => {
      this.documentList = contractor.userAttachments;
      this.rerender();
      Swal.fire(
        'Verified!',
        'Document has been verified.',
        'success'
      )
      })
    }).catch((error) => {
    });
  }

  rerender(): void {
    //this.datatableElement is important
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }
}
