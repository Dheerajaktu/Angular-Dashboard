import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  type = 'PieChart';
  title = 'Jellyfish Technologies Software Development Ratio';
  data = [
    ['Java', 20.0],
    ['Angular', 20.0],
    ['NodeJs', 10.0],
    ['Blockchain', 5.0],
    ['React', 10.0],
    ['Android', 10.0],
    ['Hybrid', 5.0],
    ['Groovy', 5.0],
    ['iOS', 10.0],
    ['Others', 5.0],

  ];
  ngOnInit() {
  }


  columnNames = ['Browser', 'Percentage',];
  options = {
    tooltip: { isHtml:true },
   
    colors: ['#3366CC', '#109618', '#ec8f6e', '#990099', '#f6c7b6'], is3D: true
  };
  width = 450;
  height = 380;

  constructor() {}

}

