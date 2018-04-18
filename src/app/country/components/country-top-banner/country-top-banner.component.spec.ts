import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryTopBannerComponent } from './country-top-banner.component';

describe('CountryTopBannerComponent', () => {
  let component: CountryTopBannerComponent;
  let fixture: ComponentFixture<CountryTopBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryTopBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryTopBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
