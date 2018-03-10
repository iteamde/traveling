import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterModalStep4Component } from './register-modal-step-4.component';

describe('RegisterModalStep4Component', () => {
  let component: RegisterModalStep4Component;
  let fixture: ComponentFixture<RegisterModalStep4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterModalStep4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterModalStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
