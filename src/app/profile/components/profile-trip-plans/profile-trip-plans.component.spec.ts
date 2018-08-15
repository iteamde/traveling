import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTripPlansComponent } from './profile-trip-plans.component';

describe('ProfileTripPlansComponent', () => {
  let component: ProfileTripPlansComponent;
  let fixture: ComponentFixture<ProfileTripPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTripPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTripPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
