import { Component, OnInit } from '@angular/core';
import {Sensor} from '../model/Sensor';
import {ActivatedRoute, Router} from '@angular/router';
import {MeasurementService} from '../services/measurement.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {
  uuid: string;
  sensors: Sensor[] = [];

  constructor(private route: ActivatedRoute,
              private measurementService: MeasurementService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.uuid = params.get('uuid');
    });
    this.measurementService.getSensors(this.uuid).subscribe(sensors => {
      this.sensors = sensors;
      console.log(this.sensors);
    });
  }

  showChart(sensor: Sensor) {
    this.router.navigate(['/sensor', this.uuid, sensor.sensorType]);

  }
}
