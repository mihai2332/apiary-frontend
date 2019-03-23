import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Module} from '../model/Module';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {
  private URL = 'http://localhost:8080/module';

  constructor(private http: HttpClient) { }

  getModules(): Observable<Module[]> {
    return this.http.get<Module[]>(this.URL);
  }
  addModule(uuid: string): Observable<any> {
    return this.http.post(this.URL, uuid);
  }
}
