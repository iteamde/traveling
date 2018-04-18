import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryMiddleBannerComponent } from './country-middle-banner.component';

describe('CountryMiddleBannerComponent', () => {
  let component: CountryMiddleBannerComponent;
  let fixture: ComponentFixture<CountryMiddleBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryMiddleBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryMiddleBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
