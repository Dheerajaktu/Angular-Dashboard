import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  title = 'Average Temperature in Indian Cities';
  type = 'LineChart';
  data = [
    ["Jan", 7.0, -0.2, -0.9, 3.9],
    ["Feb", 6.9, 0.8, 0.6, 4.2],
    ["Mar", 9.5, 5.7, 3.5, 5.7],
    ["Apr", 14.5, 11.3, 8.4, 8.5],
    ["May", 18.2, 17.0, 13.5, 11.9],
    ["Jun", 21.5, 22.0, 17.0, 15.2],
    ["Jul", 25.2, 24.8, 18.6, 17.0],
    ["Aug", 26.5, 24.1, 17.9, 16.6],
    ["Sep", 23.3, 20.1, 14.3, 14.2],
    ["Oct", 18.3, 14.1, 9.0, 10.3],
    ["Nov", 13.9, 8.6, 3.9, 6.6],
    ["Dec", 9.6, 2.5, 1.0, 4.8]
  ];

  constructor() {
  }

  ngOnInit() {
  }

  columnNames = ["Cities", "Noida", "Banglore", "Bareilly", "Mumbai"];
  options = {
    hAxis: {
      title: 'Cities'
    },
    vAxis: {
      title: 'Temperature'
    },
  };
  width = 450;
  height = 380;


}
