import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MeasurementService} from '../services/measurement.service';
import {Sensor} from '../model/Sensor';

@Component({
  selector: 'app-measurement-charts',
  templateUrl: './measurement-charts.component.html',
  styleUrls: ['./measurement-charts.component.css']
})
export class MeasurementChartsComponent implements OnInit {
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
