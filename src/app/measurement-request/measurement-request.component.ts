import {Component, Input, OnInit} from '@angular/core';
import {MeasurementService} from '../services/measurement.service';
import {Measurement} from '../model/Measurement';

@Component({
  selector: 'app-measurement-request',
  templateUrl: './measurement-request.component.html',
  styleUrls: ['./measurement-request.component.css']
})
export class MeasurementRequestComponent implements OnInit {
  @Input() moduleUUID: string;
  @Input() sensorName: string;
  measurements: Measurement[] = [];

  constructor(private measurementService: MeasurementService) {
  }

  ngOnInit() {
    this.measurementService.getDecimatedData(this.sensorName, this.moduleUUID).subscribe(measurements => {
      this.measurements = measurements.sort((a, b) => {
        return new Date(a.creationDate).getTime() - new Date(b.creationDate).getTime();
      });
    });
  }

  getMaxValueYAxis() {
    const max = Math.max(...this.measurements.map(item => +item.value));
    if (max < 1000) {
      return Math.round(Math.floor(max + ((max * 10) / 100)));
    } else if (max > 1000 && max < 10000) {
      return Math.round(Math.floor(max + ((max * 10) / 100)) / 100) * 100;
    } else if (max > 10000 && max < 100000) {
      return Math.round(Math.floor(max + ((max * 10) / 100)) / 1000) * 1000;
    } else if (max > 100000) {
      return Math.round(Math.floor(max + ((max * 10) / 100)) / 10000) * 10000;
    }
  }
}
