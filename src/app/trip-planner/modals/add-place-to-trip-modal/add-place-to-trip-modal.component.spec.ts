import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlaceToTripModalComponent } from './add-place-to-trip-modal.component';

describe('AddPlaceToTripModalComponent', () => {
  let component: AddPlaceToTripModalComponent;
  let fixture: ComponentFixture<AddPlaceToTripModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlaceToTripModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlaceToTripModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
