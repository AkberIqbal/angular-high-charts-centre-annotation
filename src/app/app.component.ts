import { Component, OnInit, NgModule, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as Highcharts from 'highcharts';
import AnnotationModule from 'highcharts/modules/annotations';
AnnotationModule(Highcharts);

@Component({
  selector: 'my-app',
  template: `
        <div id="container" style="height: 400px; min-width: 380px"></div>
    `,
  styles: ["app.component.css"]
})
export class AppComponent implements OnInit {
  name: string;
  constructor() {
    this.name = `Angular! v${VERSION.full}`;
  }

  ngOnInit() {

    Highcharts.chart('container', {
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        column: {
          pointPadding: 0,
          borderWidth: 0,
          groupPadding: 0
        }
      },
      series: [{
        type: 'column',
        data: this.getData(),
        turboThreshold: 0
      }],
      title: {
        text: null
      },
      time: {
        useUTC: false
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        visible: false,
        tickPositions: [0, 1]
      },
      tooltip: {
        formatter: function () {
          return (<any>this.point).dateTime + '<br/>' +
            'Mode: <b>' + (<any>this.point).currentStatus + '</b>';
        }
      },
      annotations: [
        {
          shapes: [{
            point: {
              xAxis: 0,
              yAxis: 0,
              x: 1547442017000, y: 1
            },
            type: 'rect',
            height: 355,
            width: 0.01,
            fill: 'rgba(0, 0, 0, 0.75)',
            stroke: 'rgba(0, 0, 0, 0.75)',
            strokeWidth: 20
          }]
        }]
    });
  }


  getData() {
    return [
      { x: 1547437686000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T03: 48: 06.000Z' },
      { x: 1547437747000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T03: 49: 07.000Z' },
      { x: 1547437808000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T03: 50: 08.000Z' },
      { x: 1547437869000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T03: 51: 09.000Z' },
      { x: 1547437930000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T03: 52: 10.000Z' },
      { x: 1547437991000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T03: 53: 11.000Z' },
      { x: 1547438052000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T03: 54: 12.000Z' },
      { x: 1547438113000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T03: 55: 13.000Z' },
      { x: 1547438174000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T03: 56: 14.000Z' },
      { x: 1547438235000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T03: 57: 15.000Z' },
      { x: 1547438296000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T03: 58: 16.000Z' },
      { x: 1547438357000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T03: 59: 17.000Z' },
      { x: 1547438418000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 00: 18.000Z' },
      { x: 1547438479000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 01: 19.000Z' },
      { x: 1547438540000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 02: 20.000Z' },
      { x: 1547438601000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 03: 21.000Z' },
      { x: 1547438662000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 04: 22.000Z' },
      { x: 1547438723000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 05: 23.000Z' },
      { x: 1547438784000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 06: 24.000Z' },
      { x: 1547438845000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 07: 25.000Z' },
      { x: 1547438906000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 08: 26.000Z' },
      { x: 1547438967000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 09: 27.000Z' },
      { x: 1547439028000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 10: 28.000Z' },
      { x: 1547439089000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 11: 29.000Z' },
      { x: 1547439150000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 12: 30.000Z' },
      { x: 1547439211000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 13: 31.000Z' },
      { x: 1547439272000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 14: 32.000Z' },
      { x: 1547439333000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 15: 33.000Z' },
      { x: 1547439394000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 16: 34.000Z' },
      { x: 1547439455000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 17: 35.000Z' },
      { x: 1547439516000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 18: 36.000Z' },
      { x: 1547439577000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 19: 37.000Z' },
      { x: 1547439638000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 20: 38.000Z' },
      { x: 1547439699000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 21: 39.000Z' },
      { x: 1547439760000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 22: 40.000Z' },
      { x: 1547439821000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 23: 41.000Z' },
      { x: 1547439882000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 24: 42.000Z' },
      { x: 1547439943000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 25: 43.000Z' },
      { x: 1547440004000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 26: 44.000Z' },
      { x: 1547440065000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 27: 45.000Z' },
      { x: 1547440126000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 28: 46.000Z' },
      { x: 1547440187000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 29: 47.000Z' },
      { x: 1547440248000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 30: 48.000Z' },
      { x: 1547440309000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 31: 49.000Z' },
      { x: 1547440370000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 32: 50.000Z' },
      { x: 1547440431000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 33: 51.000Z' },
      { x: 1547440492000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 34: 52.000Z' },
      { x: 1547440553000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 35: 53.000Z' },
      { x: 1547440614000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 36: 54.000Z' },
      { x: 1547440675000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 37: 55.000Z' },
      { x: 1547440736000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 38: 56.000Z' },
      { x: 1547440797000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 39: 57.000Z' },
      { x: 1547440858000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 40: 58.000Z' },
      { x: 1547440919000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 41: 59.000Z' },
      { x: 1547440980000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 43: 00.000Z' },
      { x: 1547441041000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 44: 01.000Z' },
      { x: 1547441102000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 45: 02.000Z' },
      { x: 1547441163000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 46: 03.000Z' },
      { x: 1547441224000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 47: 04.000Z' },
      { x: 1547441285000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 48: 05.000Z' },
      { x: 1547441346000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 49: 06.000Z' },
      { x: 1547441407000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 50: 07.000Z' },
      { x: 1547441468000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 51: 08.000Z' },
      { x: 1547441529000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 52: 09.000Z' },
      { x: 1547441590000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 53: 10.000Z' },
      { x: 1547441651000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 54: 11.000Z' },
      { x: 1547441712000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 55: 12.000Z' },
      { x: 1547441773000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 56: 13.000Z' },
      { x: 1547441834000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 57: 14.000Z' },
      { x: 1547441895000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 58: 15.000Z' },
      { x: 1547441956000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T04: 59: 16.000Z' },
      { x: 1547442017000, y: 1, color: '#FFD700', currentStatus: 'Warning', dateTime: '2019-01-14T05: 00: 17.000Z' },
      { x: 1547442078000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 01: 18.000Z' },
      { x: 1547442139000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 02: 19.000Z' },
      { x: 1547442200000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 03: 20.000Z' },
      { x: 1547442261000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 04: 21.000Z' },
      { x: 1547442322000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 05: 22.000Z' },
      { x: 1547442383000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 06: 23.000Z' },
      { x: 1547442444000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 07: 24.000Z' },
      { x: 1547442505000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 08: 25.000Z' },
      { x: 1547442566000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 09: 26.000Z' },
      { x: 1547442627000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 10: 27.000Z' },
      { x: 1547442688000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 11: 28.000Z' },
      { x: 1547442749000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 12: 29.000Z' },
      { x: 1547442810000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 13: 30.000Z' },
      { x: 1547442871000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 14: 31.000Z' },
      { x: 1547442932000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 15: 32.000Z' },
      { x: 1547442993000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 16: 33.000Z' },
      { x: 1547443054000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 17: 34.000Z' },
      { x: 1547443115000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 18: 35.000Z' },
      { x: 1547443176000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 19: 36.000Z' },
      { x: 1547443237000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 20: 37.000Z' },
      { x: 1547443298000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 21: 38.000Z' },
      { x: 1547443359000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 22: 39.000Z' },
      { x: 1547443420000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 23: 40.000Z' },
      { x: 1547443481000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 24: 41.000Z' },
      { x: 1547443542000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 25: 42.000Z' },
      { x: 1547443603000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 26: 43.000Z' },
      { x: 1547443664000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 27: 44.000Z' },
      { x: 1547443725000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 28: 45.000Z' },
      { x: 1547443786000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 29: 46.000Z' },
      { x: 1547443847000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 30: 47.000Z' },
      { x: 1547443908000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 31: 48.000Z' },
      { x: 1547443969000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 32: 49.000Z' },
      { x: 1547444030000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 33: 50.000Z' },
      { x: 1547444091000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 34: 51.000Z' },
      { x: 1547444152000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 35: 52.000Z' },
      { x: 1547444213000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 36: 53.000Z' },
      { x: 1547444274000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 37: 54.000Z' },
      { x: 1547444335000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 38: 55.000Z' },
      { x: 1547444396000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 39: 56.000Z' },
      { x: 1547444457000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 40: 57.000Z' },
      { x: 1547444518000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 41: 58.000Z' },
      { x: 1547444579000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 42: 59.000Z' },
      { x: 1547444640000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 44: 00.000Z' },
      { x: 1547444701000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 45: 01.000Z' },
      { x: 1547444762000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 46: 02.000Z' },
      { x: 1547444823000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 47: 03.000Z' },
      { x: 1547444884000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 48: 04.000Z' },
      { x: 1547444945000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 49: 05.000Z' },
      { x: 1547445006000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 50: 06.000Z' },
      { x: 1547445067000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 51: 07.000Z' },
      { x: 1547445128000, y: 1, color: '#008020', currentStatus: 'OK', dateTime: '2019-01-14T05: 52: 08.000Z' }
    ]
      ;
  }

}