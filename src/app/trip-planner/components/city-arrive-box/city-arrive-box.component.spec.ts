import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityArriveBoxComponent } from './city-arrive-box.component';

describe('CityArriveBoxComponent', () => {
  let component: CityArriveBoxComponent;
  let fixture: ComponentFixture<CityArriveBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityArriveBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityArriveBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
