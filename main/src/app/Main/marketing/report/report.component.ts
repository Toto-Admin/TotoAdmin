import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent  {

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
