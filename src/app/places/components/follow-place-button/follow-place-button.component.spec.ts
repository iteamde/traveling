import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowPlaceButtonComponent } from './follow-place-button.component';

describe('FollowButtonComponent', () => {
  let component: FollowPlaceButtonComponent;
  let fixture: ComponentFixture<FollowPlaceButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowPlaceButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowPlaceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
