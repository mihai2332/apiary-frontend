import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementRequestComponent } from './measurement-request.component';

describe('MeasurementRequestComponent', () => {
  let component: MeasurementRequestComponent;
  let fixture: ComponentFixture<MeasurementRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
