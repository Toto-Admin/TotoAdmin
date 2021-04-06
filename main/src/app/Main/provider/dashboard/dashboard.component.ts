import { AfterViewInit, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements  AfterViewInit  {

constructor(){}

public pieChartLabels: string[] = [
  'Download Sales',
  'In-Store Sales',
  'Mail Sales'
];
public pieChartData: number[] = [300, 500, 100];
public pieChartType = 'pie';
ngAfterViewInit() {}

}
