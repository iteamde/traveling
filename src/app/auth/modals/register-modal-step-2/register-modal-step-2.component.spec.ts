import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterModalStep2Component } from './register-modal-step-2.component';

describe('RegisterModalStep2Component', () => {
  let component: RegisterModalStep2Component;
  let fixture: ComponentFixture<RegisterModalStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterModalStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterModalStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
