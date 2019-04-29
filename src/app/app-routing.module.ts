import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {SingleChartComponent} from './single-chart/single-chart.component';
import {SensorsComponent} from './sensors/sensors.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminDashboardComponent
  },
  {
    path: 'signup',
    component: RegisterComponent
  },
  {
    path: 'module/:uuid',
    component: SensorsComponent
  },
  {
    path: 'sensor/:uuid/:name',
    component: SingleChartComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
