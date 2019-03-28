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

  constructor(private token: TokenStorageService,
              private measurementService: MeasurementService,
              private router: Router) {
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

  showMeasurements(module: Module) {
    this.router.navigate(['/module', module.uuid]);
  }

  changeAddFlag(flag: boolean) {
    this.boolFlagAdd = flag;
  }
}
