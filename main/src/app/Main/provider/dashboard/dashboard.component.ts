import { AfterViewInit, Component,  ViewChild } from '@angular/core';
// import {
//   ApexAxisChartSeries,
//   ApexChart,
//   ChartComponent,
//   ApexDataLabels,
//   ApexYAxis,
//   ApexLegend,
//   ApexXAxis,
//   ApexTooltip,
//   ApexTheme,
//   ApexGrid,
//   ApexFill
// } from 'ng-apexcharts';

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   yaxis: ApexYAxis;
//   stroke: any;
//   theme: ApexTheme;
//   tooltip: ApexTooltip;
//   dataLabels: ApexDataLabels;
//   legend: ApexLegend;
//   colors: string[];
//   markers: any;
//   fill: ApexFill;
//   grid: ApexGrid;
// };

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

  // @ViewChild("chart") chart: ChartComponent = Object.create(null);
  // public chartOptions: Partial<ChartOptions>;
  // constructor() {
  //   this.chartOptions = {
  //     series: [
  //       {
  //         name: 'Sales Performance',
  //         data: [30, 400, 100, 400, 150, 275, 135, 200, 218]
  //       },
        // {
        //   name: 'Site B',
        //   data: [130, 340, 200, 350, 250, 130, 189, 135, 258]
        // }
//       ],
//       chart: {
//         fontFamily: 'Nunito Sans,sans-serif',
//         height: 350,
//         type: 'area',
//         toolbar: {
//           show: false
//         }
//       },
//       dataLabels: {
//         enabled: false
//       },
//       markers: {
//         size: 3,
//         strokeColors: "transparent"
//       },
//       stroke: {
//         curve: 'smooth',
//         width: '2',
//       },
//       colors: ['#2962ff', '#4fc3f7'],
//       legend: {
//         show: false,
//       },
//       fill: {
//         opacity: 0.7
//       },
//       grid: {
//         show: true,
//         strokeDashArray: 0,
//         borderColor: 'rgba(0,0,0,0.1)',
//       },
//       xaxis: {
//         type: 'category',
//         categories: [
//           'Feb',
//           'Mar',
//           'Apr',
//           'May',
//           'Jun',
//           'Jul',
//           'Aug',
//           'Sep',
//           'Oct'
//         ],
//         labels: {
//           style: {
//             colors: '#a1aab2'
//           }
//         }
//       },
//       tooltip: {
//         theme: 'dark'
//       }
//     };
//   }
//   ngAfterViewInit(): void {
//     throw new Error('Method not implemented.');
//   }

 

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
  'AC Service',
  'TV Service',
  'ISP',
  'Poor wifi Coverage',
  'Connectivity',
  'Voice Modulation'

];

public pieChartData: number[] = [100, 200, 100,50,300,50];
public pieChartType = 'pie';
// ngAfterViewInit() {}




}