import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';

import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexLegend,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexTheme,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexFill,
  ApexMarkers,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexStroke,

  
} from 'ng-apexcharts';


export type salesChartOptions = {
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
  grid: ApexGrid;
};

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

export type Revenue2ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: any;
  fill: ApexFill;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  colors: string[];
  markers: any;
  plotOptions: ApexPlotOptions
};
export type Pageview2ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: any;
  fill: ApexFill;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  colors: string[];
  markers: any;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent = Object.create(null);
  public salesChartOptions: Partial<salesChartOptions>;

  @ViewChild('chart') chart1: ChartComponent = Object.create(null);
  public CampaignStatsChartOptions: Partial<CampaignStatsChartOptions>;

  @ViewChild("chart") chart3: ChartComponent = Object.create(null);
  public Revenue2ChartOptions: Partial<Revenue2ChartOptions>;

  @ViewChild("chart2") chart4: ChartComponent = Object.create(null);
  public Pageview2ChartOptions: Partial<Pageview2ChartOptions>;

  ngOnInit(): void {
  }


  constructor() {

    this.salesChartOptions = {
      series: [
        {
          name: 'WIFI Connection',
          data: [0, 300, 100, 200, 1200, 100, 500, 100]
        },
        {
          name: 'ISP',
          data: [0, 500, 600, 800, 2800, 900, 800, 2200]
        }
      ],
      chart: {
        fontFamily: 'Nunito Sans,sans-serif',
        height: 250,
        type: 'area',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 3,
        strokeColors: 'transparent',
      },
      stroke: {
        curve: 'smooth',
        width: '2',
      },
      colors: ['#2962ff', '#4fc3f7'],
      legend: {
        show: false,
      },
      grid: {
        show: true,
        strokeDashArray: 0,
        borderColor: 'rgba(0,0,0,0.1)',
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      xaxis: {
        type: 'category',
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep'
        ],
        labels: {
          style: {
            colors: '#a1aab2'
          }
        }
      },
      tooltip: {
        theme: 'dark'
      }
    };

    this.CampaignStatsChartOptions = {
      series: [{
        name: 'Total Revenue',
        data: [5, 4, 3, 7, 5, 10, 3, 5, 4, 3, 7, 10],
      },
      {
        name: "Total Revenue by Accessories",
        data: [2, 6, 5, 3, 4, 9, 6, 7, 3, 8, 10, 6],
      }],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          barHeight: '45%',
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

    /***********************/
    /* Revenue chart */
    /************************/
    this.Revenue2ChartOptions = {
      series: [
        {
          name: 'Revenue stats',
          data: [6, 10, 9, 11, 9, 10, 12, 10, 9, 11, 9, 10]
        },
      ],
      plotOptions: {
        bar: {
          columnWidth: '70%',
        }
      },
      chart: {
        fontFamily: 'Nunito Sans,sans-serif',
        type: 'bar',
        height: 80,
        sparkline: {
          enabled: true
        }
      },
      fill: {
        colors: ['#fff'],
        opacity: 0.7,
      },
      stroke: {
        show: true,
        width: 7,
        colors: ["transparent"],
      },
      tooltip: {
        theme: 'dark',
        fillSeriesColor: false,
        marker: {
          show: false,
        },
        x: {
          show: false
        },
        fixed: {
          enabled: true,
          position: 'topRight',
          offsetX: 0,
          offsetY: -50,
        },
      }
    }

    /***********************/
    /* pageview chart */
    /************************/
    this.Pageview2ChartOptions = {
      series: [
        {
          name: 'Promocode used',
          data: [28, 40, 36, 52, 38, 60, 55]
        },
      ],
      chart: {
        type: "area",
        fontFamily: 'Nunito Sans,sans-serif',
        height: "70",
        toolbar: {
          show: false,
        },
        sparkline: { enabled: true },
      },
      fill: {
        type: "solid",
        colors: ['#fff'],
        opacity: 0.4
      },
      colors: ['#fff'],
      stroke: {
        curve: "straight",
        width: 0,
      },
      tooltip: {
        theme: "dark",
      },
    } 
  }

  ngAfterViewInit() {
  }

}
