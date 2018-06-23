import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftOutsideMenuComponent } from './left-outside-menu.component';

describe('LeftOutsideMenuComponent', () => {
  let component: LeftOutsideMenuComponent;
  let fixture: ComponentFixture<LeftOutsideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftOutsideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftOutsideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
