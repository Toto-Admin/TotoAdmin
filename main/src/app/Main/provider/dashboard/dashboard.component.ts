import { AfterViewInit, Component,  ViewChild } from '@angular/core';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexMarkers,
  ApexFill,
  ApexPlotOptions,
  ApexNonAxisChartSeries,
  ApexTheme
} from 'ng-apexcharts';


export interface EmailChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  legends: ApexLegend;
  labels: any;
  name: any;
  tooltip: ApexTooltip;
  colors: string[];
  plotOptions: ApexPlotOptions
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent  {

  @ViewChild('chart') chart8: ChartComponent = Object.create(null);
  public EmailChartOptions!: Partial<EmailChartOptions>;

  @ViewChild('chart') chart9: ChartComponent = Object.create(null);
  public EmailChartOptions1!: Partial<EmailChartOptions>;

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


 constructor(){
  this.EmailChartOptions = {
    series: [12, 15, 14],
    chart: {
      fontFamily: 'Nunito Sans,sans-serif',
      type: 'donut',
      height: 270
    },
    plotOptions: {
      pie: {
        donut: {
          size: '73px',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '18px',
              color: undefined,
              offsetY: 10
            },
            value: {
              show: false,
              color: '#99abb4',
            },
            total: {
              show: true,
              label: 'Tickets',
              color: '#99abb4',
            }
          }
        }
      }
    },
    tooltip: {
      fillSeriesColor: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0
    },
    legends: {
      show: false,
    },
    labels: ['Answered', 'Chat', 'Resolved'],
    colors: ['#36bea6', '#ffbc34', '#f62d51'],

  };

  this.EmailChartOptions1 = {
    series: [120, 155],
    chart: {
      fontFamily: 'Nunito Sans,sans-serif',
      type: 'donut',
      height: 270
    },
    plotOptions: {
      pie: {
        donut: {
          size: '73px',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '18px',
              color: undefined,
              offsetY: 10
            },
            value: {
              show: false,
              color: '#99abb4',
            },
            total: {
              show: true,
              label: 'Visits',
              color: '#99abb4',
            }
          }
        }
      }
    },
    tooltip: {
      fillSeriesColor: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0
    },
    legends: {
      show: false,
    },
    labels: ['On-Site','Remote'],
    colors: ['#99abb4','#7e74fb'],

  };
 }

 public doughnutChartLabels: string[] = [
  '1 Star' ,
   '2 Star',
   '3 Star',
  '4 Star',
   '5 Star'


 ];
public doughnutChartData: number[] = [20,70,100, 150, 100];
public doughnutChartType = 'doughnut';

//service wise provider
public pieChartLabels: string[] = [
  'Ac Service',
  'Tv Service',
  'Internate Speed',
  'Poor Wifi Coverage',
  'Connectivity',
  'Voice Modulation'

];

public pieChartData: number[] = [100, 200, 100,50,300,50];
public pieChartType = 'pie';
// ngAfterViewInit() {}

currentJustify = 'start';

active=1;

activeKeep=1;

activeSelected=1;
disabled = true;


tabs = [1, 2, 3, 4, 5];
counter = this.tabs.length + 1;
activeDynamic=1;
ngOnInit(): void {
}

onNavChange(changeEvent: NgbNavChangeEvent) {
  if (changeEvent.nextId === 3) {
    changeEvent.preventDefault();
  }
}


}