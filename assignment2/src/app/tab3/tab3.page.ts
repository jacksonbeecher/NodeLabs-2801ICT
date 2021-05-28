import { getLocaleNumberSymbol } from '@angular/common';
import { Component, ViewChild } from '@angular/core';

import chart from 'chart.js/auto';
import { utils } from 'protractor';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild('healthChart', {static:true}) canvas;
  chart: any;
  workouts = []

  constructor() {}
  // const data = {
  //   labels:labels
  // }

  ngOnInit() {
    this.chart = new chart(this.canvas.nativeElement, {
      
      

      //chart properties
      // var myLineChart = new chart(ctx, {
      //   type: 'line',
      //   data:data,
      //   options; options
      // });
    })
  }
}
