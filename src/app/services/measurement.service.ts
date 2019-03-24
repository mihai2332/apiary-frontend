import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Module} from '../model/Module';
import {HttpClient} from '@angular/common/http';
import {Sensor} from '../model/Sensor';
import {SensorChart} from '../model/SensorChart';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {
  private URL = 'http://localhost:8080/module/';

  constructor(private http: HttpClient) { }

  getModules(): Observable<Module[]> {
    return this.http.get<Module[]>(this.URL);
  }
  addModule(module: any): Observable<any> {
    return this.http.post(this.URL, module);
  }
  getSensors(uuid: string): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(this.URL + uuid + '/sensor');
  }

  getMeasurementsWithinRange(sensor: SensorChart) {

  }
}
