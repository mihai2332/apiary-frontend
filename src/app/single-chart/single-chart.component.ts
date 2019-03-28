import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MeasurementService} from '../services/measurement.service';
import {SensorChart} from '../model/SensorChart';
import {Measurement} from '../model/Measurement';
import {TokenStorageService} from '../auth/token-storage.service';

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
  authToken: any;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private measurementService: MeasurementService,
              private token: TokenStorageService) {
  }

  ngOnInit() {
    this.authToken = this.token.getToken();
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
    });
  }
}
