import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {MeasurementService} from '../services/measurement.service';
import {Module} from '../model/Module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUserInfo: any;
  modules: Module[] = [];

  constructor(private token: TokenStorageService,
              private measurementService: MeasurementService) {
  }

  ngOnInit() {
    this.currentUserInfo = {token: this.token.getToken()};
    this.measurementService.getModules().subscribe(modules => {
      this.modules = modules;
    });
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
