import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {httpInterceptorProviders} from './auth/auth-interceptor';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatMenuModule, MatProgressSpinnerModule, MatSnackBarModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddModuleComponent } from './add-module/add-module.component';
import { MeasurementChartsComponent } from './measurement-charts/measurement-charts.component';
import {SatDatepickerModule, SatNativeDateModule} from 'saturn-datepicker';
import { SingleChartComponent } from './single-chart/single-chart.component';
import {ChartsModule} from 'ng2-charts';
import { SensorsComponent } from './sensors/sensors.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddModuleComponent,
    MeasurementChartsComponent,
    SingleChartComponent,
    SensorsComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SatDatepickerModule,
    SatNativeDateModule,
    MatDatepickerModule,
    ChartsModule,
    MatSnackBarModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
