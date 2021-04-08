import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Provider } from '../provider';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {
  config: any;
  // editUser: FormGroup | null = null;
  providerDetail: Provider | null = null;

  filterArray: Provider[] | null = null;

 
  editUser: FormGroup | null = null;

  constructor(private fb: FormBuilder,private modalService: NgbModal) { }
  formsErrors = [];
  ngOnInit(): void {
    this.editUser = this.fb.group({
      id: [''],
      Name: ['', Validators.required],
      Email: ['', Validators.required],
      Mobile: ['', Validators.required],
      
  });
  }

  openModal(targetModal: NgbModal, provider: Provider | null) {
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
