import { LatLngLiteral } from '@agm/core';
import { Component, OnInit, ViewChild } from '@angular/core';
declare const google:any;
@Component({
  selector: 'app-coverage-area',
  templateUrl: './coverage-area.component.html',
  styleUrls: ['./coverage-area.component.css']
})
export class CoverageAreaComponent  {

  @ViewChild('map1', { static: true }) map1:any = Object.create(null);
  @ViewChild('map2', { static: true }) map2:any = Object.create(null);
  @ViewChild('map3', { static: true }) map3:any = Object.create(null);
  @ViewChild('map4', { static: true }) map4:any = Object.create(null);

  lat = -34.397;
  lng = 150.644;
  latA = -34.754764;
  lngA = 149.736246;
  zoom = 8;
  
  // styles: any = [
  //   {
  //     featureType: 'all',
  //     stylers: [
  //       {
  //         saturation: -80
  //       }
  //     ]
  //   },
  //   {
  //     featureType: 'road.arterial',
  //     elementType: 'geometry',
  //     stylers: [
  //       {
  //         hue: '#00ffee'
  //       },
  //       {
  //         saturation: 50
  //       }
  //     ]
  //   },
  //   {
  //     featureType: 'poi.business',
  //     elementType: 'labels',
  //     stylers: [
  //       {
  //         visibility: 'off'
  //       }
  //     ]
  //   }
  // ];

  constructor() { }

  ngOnInit(): void {
    $('#backButton').show();
  }
  onMapReady(map: any){
    this.initDrawingManager(map);

  }
  initDrawingManager(map: any) {
    const options={
      drwaingControl:true,
      drawingControlOptions:{
        drawingModes:["polygon"]
      },
      polygonOptions:{
        draggable:true,
        editable:true,
        fillColor: "white",
      },
      drawingMode: google.maps.drawing.OverlayType.POLYGON

    }
    const drawingManager = new google.maps.drawing.DrawingManager(options);
    drawingManager.setMap(map);
   }

}
