import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from '../../Services/provider/provider.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-history',
  templateUrl: './task-history.component.html',
  styleUrls: ['./task-history.component.css']
})
export class TaskHistoryComponent{
  jobList : any;
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective, { static: false })
  datatableElement!: DataTableDirective;
  

  @ViewChild('map4', { static: true }) map4:any = Object.create(null);
  lat = -34.397;
  lng = 150.644;
  latA = -34.754764;
  lngA = 149.736246;
  latB = -34.758767;
  lngB = 148.176563;
  latC = -35.754764;
  lngC = 148.736246;
  zoom = 6;
  icon = {
    url: 'assets/images/users/5.jpg',
    scaledSize: { width: 45, height: 45,  anchor : {x:19, y:19} }, labelOrigin:{x:12,y:27}
  }
  img1 = "assets/images/users/5.jpg";
  styles: any = [
    {
      featureType: 'all',
      stylers: [
        {
          saturation: -80
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        {
          hue: '#00ffee'
        },
        {
          saturation: 50
        }
      ]
    },
    {
      featureType: 'poi.business',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    }
  ];

  constructor(private activatedRoute: ActivatedRoute, private providerServices: ProviderService){
    this.activatedRoute.params.subscribe((params: any) => {
      if (params.id) {
        this.providerServices.contractorJob(parseInt(params.id)).then(contractor => {
            this.jobList = contractor.jobs;
            console.log(this.jobList)
        }).catch((error) => {
            //this.helper.errorMessage({ message: error.message });
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

}
