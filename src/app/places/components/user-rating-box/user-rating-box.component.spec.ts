import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRatingBoxComponent } from './user-rating-box.component';

describe('UserRatingBoxComponent', () => {
  let component: UserRatingBoxComponent;
  let fixture: ComponentFixture<UserRatingBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRatingBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRatingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
