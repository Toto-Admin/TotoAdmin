import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-view',
  templateUrl: './provider-view.component.html',
  styleUrls: ['./provider-view.component.css']
})
export class ProviderViewComponent implements OnInit {

  @ViewChild('map4', { static: true }) map4:any = Object.create(null);

  
  lat = -34.397;
  lng = 150.644;
  latA = -34.754764;
  lngA = 149.736246;
  zoom = 8;

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
  constructor() { }

  ngOnInit(): void {
  }

}
