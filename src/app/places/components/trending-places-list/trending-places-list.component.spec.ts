import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingPlacesListComponent } from './trending-places-list.component';

describe('TrendingPlacesListComponent', () => {
  let component: TrendingPlacesListComponent;
  let fixture: ComponentFixture<TrendingPlacesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingPlacesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingPlacesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
