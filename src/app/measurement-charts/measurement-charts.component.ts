import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {Measurement} from '../model/Measurement';

@Component({
  selector: 'app-measurement-charts',
  templateUrl: './measurement-charts.component.html',
  styleUrls: ['./measurement-charts.component.css']
})
export class MeasurementChartsComponent implements OnInit {
  @Input() measurements: Measurement[];
  @Input() sensorName: string;
  @Input() maxValueYAxis: number;

  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public options: any = {
    scales : {
      yAxes: [{
        ticks: {
          beginAtZero: false,
          stepValue: 10,
          steps: 20,
          max : 500,
        }
      }]
    }
  };
  public lineChartColors: Color[] = [
    { // amber
      backgroundColor: 'rgba(253,216,64,0.4)',
      borderColor: 'rgba(253,216,64,1)',
      pointBackgroundColor: 'rgba(253,216,64,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(253,216,64,0.8)'
    }];

  constructor() {
  }

  ngOnInit() {
    this.setupChart();
  }

  private setupChart() {
    const dataPoints: number[] = [];
    const labels: string[] = [];
    this.measurements.forEach(measurement => {
      dataPoints.push(Number(measurement.value));
      labels.push(this.formatLabel(measurement.creationDate));
    });
    const chartData = {data: dataPoints, label: this.sensorName};
    this.lineChartData.push(chartData);
    this.lineChartLabels = labels;
    this.options.scales.yAxes[0].ticks.max = this.maxValueYAxis;
  }

  private formatLabel(creationDate: string): string {
    const date: Date = new Date(creationDate);
    return date.getHours() + ':' + date.getUTCMinutes();
  }
}
