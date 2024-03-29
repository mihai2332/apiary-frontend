import { Component, OnInit } from '@angular/core';
import {Sensor} from '../model/Sensor';
import {ActivatedRoute, Router} from '@angular/router';
import {MeasurementService} from '../services/measurement.service';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {
  uuid: string;
  sensors: Sensor[] = [];
  authToken: any;
  isLoading = true;
  isDeleting = false;

  constructor(private route: ActivatedRoute,
              private token: TokenStorageService,
              private measurementService: MeasurementService,
              private router: Router) {
  }

  ngOnInit() {
    this.authToken = this.token.getToken();
    this.route.paramMap.subscribe(params => {
      this.uuid = params.get('uuid');
    });
    this.measurementService.getSensors(this.uuid).subscribe(sensors => {
      this.sensors = sensors;
      this.isLoading = false;
    });
  }

  showChart(sensor: Sensor) {
    this.router.navigate(['/sensor', this.uuid, sensor.sensorType]);

  }

  goBack() {
    this.router.navigate(['home']);
  }

  deleteSensor(sensor: Sensor) {
    this.isDeleting = true;
    this.measurementService.deleteSensor(this.uuid, sensor).subscribe(_ => {
      this.sensors.splice(this.sensors.indexOf(sensor), 1);
      this.isDeleting = false;
    });
  }
}
