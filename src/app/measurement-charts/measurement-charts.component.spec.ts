import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementChartsComponent } from './measurement-charts.component';

describe('MeasurementChartsComponent', () => {
  let component: MeasurementChartsComponent;
  let fixture: ComponentFixture<MeasurementChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
