import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleChartComponent } from './single-chart.component';

describe('SingleChartComponent', () => {
  let component: SingleChartComponent;
  let fixture: ComponentFixture<SingleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
