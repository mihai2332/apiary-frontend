import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MeasurementService} from '../services/measurement.service';

@Component({
  selector: 'app-single-chart',
  templateUrl: './single-chart.component.html',
  styleUrls: ['./single-chart.component.css']
})
export class SingleChartComponent implements OnInit {
  formGroup: FormGroup;
  sensorName: string;
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private measurementService: MeasurementService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.sensorName = params.get('name');
    });
    this.formGroup = this.fb.group({
      date: new FormControl()
    });
  }

  submit() {
    this.measurementService.getMeasurementsWithinRange(this.formGroup.get('date').value);
    console.log(this.formGroup.get('date').value);
  }
}
