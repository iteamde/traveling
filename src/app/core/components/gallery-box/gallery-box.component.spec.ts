import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryBoxComponent } from './gallery-box.component';

describe('CountryGalleryBoxComponent', () => {
  let component: GalleryBoxComponent;
  let fixture: ComponentFixture<GalleryBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
