import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesPhotoBoxComponent } from './places-photo-box.component';

describe('PlacesPhotoBoxComponent', () => {
  let component: PlacesPhotoBoxComponent;
  let fixture: ComponentFixture<PlacesPhotoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesPhotoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesPhotoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
