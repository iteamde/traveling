import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesTopBannerComponent } from './places-top-banner.component';

describe('PlacesTopBannerComponent', () => {
  let component: PlacesTopBannerComponent;
  let fixture: ComponentFixture<PlacesTopBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesTopBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesTopBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
