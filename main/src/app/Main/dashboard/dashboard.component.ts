import { Component, OnInit,ViewChild } from '@angular/core';
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexNonAxisChartSeries,
  ApexAxisChartSeries,
  ApexYAxis,
  ApexXAxis,
  ApexTheme,
  ApexGrid,
  ApexFill,
  ApexMarkers
} from 'ng-apexcharts';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

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

export interface COChartOptions {
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
  grid: ApexGrid
}

export type totalvisitsChartOptions = {
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
  fill: ApexFill
};

export type salesratioChartOptions = {
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
export interface userChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: any;
  fill: ApexFill;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  colors: string[];
  plotOptions: ApexPlotOptions
  markers: any;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public mEmailChartOptions: Partial<mEmailChartOptions>;

  @ViewChild('chart') chart1: ChartComponent = Object.create(null);
  public mEmailChartOptions1: Partial<mEmailChartOptions>;

  @ViewChild('chart') chart3: ChartComponent = Object.create(null);
  public mEmailChartOptions2: Partial<mEmailChartOptions>;

  @ViewChild("chart") chart4: ChartComponent = Object.create(null);
  public chartOptions: Partial<ChartOptions>;

  @ViewChild('chart') chart5: ChartComponent = Object.create(null);
  public COChartOptions!: Partial<COChartOptions>;

  @ViewChild("chart") chart6: ChartComponent = Object.create(null);
  public totalvisitsChartOptions!: Partial<totalvisitsChartOptions>;

  @ViewChild("chart") chart7: ChartComponent = Object.create(null);
  public salesratioChartOptions!: Partial<salesratioChartOptions>;


  public config: PerfectScrollbarConfigInterface = {};

  @ViewChild('chart') chart8: ChartComponent = Object.create(null);
  public EmailChartOptions!: Partial<EmailChartOptions>;

  @ViewChild('userChartOptions') chart9: ChartComponent = Object.create(null);
  public userChartOptions!: Partial<userChartOptions>;


  
  constructor() {
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
      labels: ['Connectivity', 'Stove Repair Service', 'TV', 'Mobile Hardware','New Network Setup','ISP','Voice Modulation'],
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
      labels: ['Top Performer', 'Top Rated  '],
      colors: ['#40c4ff', '#2961ff'],

    };

    this.mEmailChartOptions2 = {
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
      labels: ['Connectivity', 'Stove Repair Service', 'TV', 'Mobile Hardware','New Network Setup','ISP','Voice Modulation'],
      colors: ['#40c4ff', '#2961ff', '#ff821c', '#7e74fb','#40c4ff', '#2961ff', '#ff821c'],

    };

    this.chartOptions = {
      series: [
        {
          name: 'Sales Performance',
          data: [30, 400, 100, 400, 150, 275, 135, 200, 218]
        },
        
      ],
      chart: {
        fontFamily: 'Nunito Sans,sans-serif',
        height: 350,
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
        strokeColors: "transparent"
      },
      stroke: {
        curve: 'smooth',
        width: '2',
      },
      colors: ['#2962ff'],
      legend: {
        show: false,
      },
      fill: {
        opacity: 0.7
      },
      grid: {
        show: true,
        strokeDashArray: 0,
        borderColor: 'rgba(0,0,0,0.1)',
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
          'Sep',
          'Oct'
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

    this.COChartOptions = {
      series: [{
        name: 'Last Month',
        data: [3, 8, 2, 3, 2, 5, 6, 8],
      },
      {
        name: "Current Month",
        data: [7, 6, 5, 8, 6, 7, 2, 1],
      }],
      chart: {
        type: 'area',
        height: 170,
        fontFamily: 'Nunito Sans,sans-serif',
        sparkline: {
          enabled: true
        },
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
      xaxis: {
        labels: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false
      },
      yaxis: {
        labels: {
          show: false,
        },
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
        show: false,
      },
    };

    


    this.totalvisitsChartOptions = {
      series: [
        {
          name: 'Earnings',
          data: [6, 10, 9, 11, 9, 10, 12, 10, 9, 11, 9, 10, 12, 10]
        }
      ],
      chart: {
        height: 60,
        type: 'bar',
        fontFamily: 'Nunito Sans,sans-serif',
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0,
      },
      fill: {
        colors: ['#4fc3f7'],
        opacity: 1,
      },
      stroke: {
        show: true,
        width: 7,
        colors: ["transparent"],
      },
      legend: {
        show: false,
      },
      grid: {
        show: false
      },
      xaxis: {
        labels: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false
        }
      }
    };

    this.salesratioChartOptions = {
      series: [
        {
          name: 'sales ratio',
          data: [5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8]
        }
      ],
      chart: {
        height: 60,
        type: 'area',
        fontFamily: 'Nunito Sans,sans-serif',
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0,
      },
      stroke: {
        curve: 'smooth',
        width: '2',
      },
      colors: ['#2961ff'],
      legend: {
        show: false,
      },
      grid: {
        show: false
      },
      xaxis: {
        labels: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      tooltip: {
        theme: 'dark'
      }
    };




    this.EmailChartOptions = {
      series: [60, 40],
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
      labels: ['Ios', 'Android'],
      colors: ['#40c4ff', '#2961ff'],

    };


    /***********************/
    /* Active user chart */
    /************************/
    this.userChartOptions = {
      series: [
        {
          name: 'Active Users',
          data: [20, 55, 44, 30, 61, 48, 20, 20, 55, 44, 30, 61, 48, 20]
        },
      ],
      chart: {
        fontFamily: 'Nunito Sans,sans-serif',
        type: 'bar',
        height: '50',
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '10%',
          barHeight: '10%',
        }
      },
      fill: {
        colors: ['#2962ff'],
        opacity: 1,

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
        }
      }
    }
   }

  ngOnInit(): void {
    $('#backButton').hide();

  }

}
