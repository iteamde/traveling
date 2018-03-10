import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterModalStep5Component } from './register-modal-step-5.component';

describe('RegisterModalStep5Component', () => {
  let component: RegisterModalStep5Component;
  let fixture: ComponentFixture<RegisterModalStep5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterModalStep5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterModalStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
