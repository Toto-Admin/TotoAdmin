import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-view',
  templateUrl: './invoice-view.component.html',
  styleUrls: ['./invoice-view.component.css']
})
export class InvoiceViewComponent implements OnInit {

  id: any;
  // invoiceDetail: InvoiceList;

  // constructor(activatedRouter: ActivatedRoute, private invoiceService: InvoiceService) {

  //   this.id = activatedRouter.snapshot.paramMap.get('id');
  //   this.invoiceDetail = this.invoiceService.getInvoiceList().filter(x => x.id === +this.id)[0];

  // }

  ngOnInit() {

  }


}
