import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MeasurementService} from '../services/measurement.service';
import {SensorChart} from '../model/SensorChart';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {BaseChartDirective, Color, Label} from 'ng2-charts';
import {Measurement} from '../model/Measurement';

@Component({
  selector: 'app-single-chart',
  templateUrl: './single-chart.component.html',
  styleUrls: ['./single-chart.component.css']
})
export class SingleChartComponent implements OnInit {
  formGroup: FormGroup;
  sensorName: string;
  moduleUUID: string;
  measurements: Measurement[] = [];

  // public lineChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
  // ];
  // public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private measurementService: MeasurementService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.sensorName = params.get('name');
      this.moduleUUID = params.get('uuid');
    });
    this.formGroup = this.fb.group({
      date: new FormControl()
    });
  }

  submit() {
    const sensorDTO: SensorChart = {
      moduleUUID: this.moduleUUID,
      sensorName: this.sensorName,
      beginDate: this.formGroup.get('date').value.begin,
      endDate: this.formGroup.get('date').value.end
    };
    this.measurementService.getMeasurementsWithinRange(sensorDTO).subscribe(measurements => {
      this.measurements = measurements;
      // console.log(this.sensorName);
    });
  }
}
