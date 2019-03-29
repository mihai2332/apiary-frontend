import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {MeasurementService} from '../services/measurement.service';
import {Module} from '../model/Module';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUserInfo: any;
  modules: Module[] = [];
  boolFlagAdd = false;
  requestFlag = false;
  isLoading = true;
  isRequestInProgress: boolean;

  constructor(private token: TokenStorageService,
              private measurementService: MeasurementService,
              private router: Router) {
  }

  ngOnInit() {
    this.currentUserInfo = {token: this.token.getToken()};
    this.measurementService.getModules().subscribe(modules => {
      this.modules = modules;
      this.isLoading = false;
    });
  }

  showMeasurements(module: Module) {
    this.router.navigate(['/module', module.uuid]);
  }

  changeAddFlag(flag: boolean) {
    this.boolFlagAdd = flag;
  }

  showModules() {
    if (!this.requestFlag) {
      this.boolFlagAdd = false;
      return;
    } else {
      this.isLoading = true;
      this.measurementService.getModules().subscribe(modules => {
        this.modules = modules;
        this.isLoading = false;
        this.boolFlagAdd = false;
      });
      this.requestFlag = false;
      return;
    }
  }

  changeRequestFlag(event) {
    this.requestFlag = event;
  }

  disableButton(event) {
    this.isRequestInProgress = event;
  }
}
