import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTripPlanModalComponent } from './create-trip-plan-modal.component';

describe('CreateTripPlanModalComponent', () => {
  let component: CreateTripPlanModalComponent;
  let fixture: ComponentFixture<CreateTripPlanModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTripPlanModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTripPlanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
