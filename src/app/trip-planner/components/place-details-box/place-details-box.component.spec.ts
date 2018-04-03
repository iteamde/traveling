import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceDetailsBoxComponent } from './place-details-box.component';

describe('PlaceDetailsBoxComponent', () => {
  let component: PlaceDetailsBoxComponent;
  let fixture: ComponentFixture<PlaceDetailsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceDetailsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceDetailsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
