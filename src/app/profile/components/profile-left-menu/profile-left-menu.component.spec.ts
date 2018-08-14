import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLeftMenuComponent } from './profile-left-menu.component';

describe('ProfileLeftMenuComponent', () => {
  let component: ProfileLeftMenuComponent;
  let fixture: ComponentFixture<ProfileLeftMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileLeftMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
