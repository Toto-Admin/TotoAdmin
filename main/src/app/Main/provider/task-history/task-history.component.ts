import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task-history',
  templateUrl: './task-history.component.html',
  styleUrls: ['./task-history.component.css']
})
export class TaskHistoryComponent{

  
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

}
