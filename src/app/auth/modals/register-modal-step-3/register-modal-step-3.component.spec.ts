import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterModalStep3Component } from './register-modal-step-3.component';

describe('RegisterModalStep3Component', () => {
  let component: RegisterModalStep3Component;
  let fixture: ComponentFixture<RegisterModalStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterModalStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterModalStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
