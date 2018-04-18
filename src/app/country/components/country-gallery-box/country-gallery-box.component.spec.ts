import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryGalleryBoxComponent } from './country-gallery-box.component';

describe('CountryGalleryBoxComponent', () => {
  let component: CountryGalleryBoxComponent;
  let fixture: ComponentFixture<CountryGalleryBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryGalleryBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryGalleryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
