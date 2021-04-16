import { Component, OnInit,ViewChild } from '@angular/core';
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
  ApexPlotOptions,
  ApexStroke,
} from 'ng-apexcharts';

export type earning1ChartOptions = {
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

export type saleslocationchartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};


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
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent  {
  @ViewChild("chart") chart: ChartComponent = Object.create(null);
  public earning1ChartOptions: Partial<earning1ChartOptions>;

  @ViewChild("saleslocationchartOptions") chart1: ChartComponent = Object.create(null);
  public saleslocationchartOptions: Partial<saleslocationchartOptions>;

  @ViewChild("chart") chart3: ChartComponent = Object.create(null);
  public Revenue2ChartOptions: Partial<Revenue2ChartOptions>;

  @ViewChild("chart2") chart4: ChartComponent = Object.create(null);
  public Pageview2ChartOptions: Partial<Pageview2ChartOptions>;

  constructor() {
    this.earning1ChartOptions = {
      series: [
        {
          name: 'Earnings',
          data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3, 1.2, 2, 1.5, 1.1, 0.9]
        }
      ],
      chart: {
        height: 95,
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

    this.saleslocationchartOptions = {
      series: [
        // {
        //   name: "Total",
        //   data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        // },
        {
          name: "Promo code used",
          data: [89,76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Net Discount",
          data: [67,35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chart: {
        type: "bar",
        fontFamily: 'Nunito Sans,sans-serif',
        height: 330,
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
          startingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ]
      },
      yaxis: {
      },
      fill: {
        opacity: 1,
        type: "solid",
        colors: ['#4fc3f7', '#c7cace']
      },
      tooltip: {
        theme: "dark",
        marker: {
          show: false
        }
      }
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
  public doughnutChartLabels: string[] = [
 
    'Customer Used Promocode',
    'Earn Rewards'
  ];
  public doughnutChartData: number[] = [350, 450];
  public doughnutChartType = 'doughnut';

  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

}
