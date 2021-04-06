import { Component,  OnInit,  ViewChild} from '@angular/core';

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
export interface CampaignStatsChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  legends: ApexLegend;
  labels: any;
  name: any;
  tooltip: ApexTooltip;
  colors: string[];
  xaxis: ApexXAxis,
  yaxis: ApexYAxis,
  markers: ApexMarkers,
  grid: ApexGrid,
  fill: ApexFill,
  plotOptions: ApexPlotOptions
}

export interface mEmailChartOptions {
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

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: any;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  markers: any;
  fill: ApexFill;
  grid: ApexGrid;
};



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public CampaignStatsChartOptions: Partial<CampaignStatsChartOptions>;

  @ViewChild('chart') chart2: ChartComponent = Object.create(null);
  public mEmailChartOptions: Partial<mEmailChartOptions>;

  @ViewChild('chart') chart1: ChartComponent = Object.create(null);
  public mEmailChartOptions1: Partial<mEmailChartOptions>;

  constructor() {
    this.CampaignStatsChartOptions = {
      series: [{
        name: 'Ac service',
        data: [5, 4, 3, 7, 5, 10, 3, 5, 4, 3, 7, 10],
      },
      {
        name: "Tv Repair",
        data: [2, 6, 5, 3, 4, 9, 6, 7, 3, 8, 10, 6],
      }],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          barHeight: '105%',
        }
      },
      chart: {
        type: 'bar',
        stacked: true,
        height: 250,
        fontFamily: 'Nunito Sans,sans-serif',
        toolbar: {
          show: false
        }
      },
      stroke: {
        curve: "smooth",
        width: 1,
      },
      markers: {
        size: 3,
        strokeWidth: 3,
        strokeColors: "transparent",
      },
      colors: ["#2962FF", "#4fc3f7"],
      fill: {
        type: "solid",
        opacity: 1,
        colors: ["#2962FF", "#4fc3f7"],
      },
      xaxis: {
        type: 'category',
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        labels: {
          style: {
            colors: '#a1aab2'
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      yaxis: {
        labels: {
          style: {
            colors: '#a1aab2'
          }
        }
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
        theme: "dark",
      },
      legends: {
        show: false,
      },
      grid: {
        show: true,
      },
    };

    this.mEmailChartOptions = {
      series: [71, 60, 65, 77,289,172,298],
      chart: {
        fontFamily: 'Nunito Sans,sans-serif',
        type: 'donut',
        height: 280,
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
                label: 'Ratio',
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
      labels: [' AC Service', 'TV Repair Service', 'ISP','Poor Wifi Service','Mobile Hardware','Voice Modulation','Connectivity'],
      colors: ['#40c4ff', '#2961ff', '#ff821c', '#7e74fb','#40c4ff', '#2961ff', '#ff821c'],

    };

    this.mEmailChartOptions1 = {
      series: [71, 60],
      chart: {
        fontFamily: 'Nunito Sans,sans-serif',
        type: 'donut',
        height: 280,
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
                label: 'Ratio',
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
      labels: ['Not Good Service', ' unsatisfied '],
      colors: ['#40c4ff', '#2961ff'],

    };
  }

  
  

}
