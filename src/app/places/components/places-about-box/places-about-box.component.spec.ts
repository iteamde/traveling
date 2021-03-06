import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {PlacesAboutBoxComponent} from './places-about-box.component';

describe('PlacesAboutBoxComponent', () => {
  let component: PlacesAboutBoxComponent;
  let fixture: ComponentFixture<PlacesAboutBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesAboutBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesAboutBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
