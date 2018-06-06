import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryEmergencyNumberComponent } from './country-emergency-number.component';

describe('CountryEmergencyNumberComponent', () => {
  let component: CountryEmergencyNumberComponent;
  let fixture: ComponentFixture<CountryEmergencyNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryEmergencyNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryEmergencyNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
