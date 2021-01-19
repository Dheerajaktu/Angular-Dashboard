import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  title = 'Jellyfish Technologies Successfull  Project Delivery';
  type = 'ComboChart';
  data = [
    ['E Comm', 3, 2, 2.5],
    ['Bank', 2, 3, 2.5],
    ['USA', 1, 5, 3],
    ['Mobile', 3, 9, 6],
    ['Research', 4, 2, 3]
  ];
  columnNames = ['One', 'Two', 'Three', 'Four'];
  options = {
    hAxis: {
      title: 'Jellyfish Technologies Analysys'
    },
    vAxis: {
      title: 'No of Projects'
    },
    seriesType: 'bars',
    series: {2: {type: 'line'}}
  };
  width = 450;
  height = 380;

  constructor() { }

  ngOnInit() {
  }

}
