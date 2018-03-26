import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPlannerInfoComponent } from './trip-planner-info.component';

describe('TripPlannerInfoComponent', () => {
  let component: TripPlannerInfoComponent;
  let fixture: ComponentFixture<TripPlannerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripPlannerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPlannerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
