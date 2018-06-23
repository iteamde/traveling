import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesFooterComponent } from './places-footer.component';

describe('PlacesFooterComponent', () => {
  let component: PlacesFooterComponent;
  let fixture: ComponentFixture<PlacesFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
