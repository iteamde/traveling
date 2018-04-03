import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedPlaceBoxComponent } from './completed-place-box.component';

describe('CompletedPlaceBoxComponent', () => {
  let component: CompletedPlaceBoxComponent;
  let fixture: ComponentFixture<CompletedPlaceBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedPlaceBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedPlaceBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
