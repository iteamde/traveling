import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenuButtonsComponent } from './mobile-menu-buttons.component';

describe('MobileMenuButtonsComponent', () => {
  let component: MobileMenuButtonsComponent;
  let fixture: ComponentFixture<MobileMenuButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileMenuButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMenuButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
