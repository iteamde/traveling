import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCityToTripModalComponent } from './add-city-to-trip-modal.component';

describe('AddCityToTripModalComponent', () => {
  let component: AddCityToTripModalComponent;
  let fixture: ComponentFixture<AddCityToTripModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCityToTripModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCityToTripModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
