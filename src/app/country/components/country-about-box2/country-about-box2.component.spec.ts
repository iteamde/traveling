import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryAboutBox2Component } from './country-about-box2.component';

describe('CountryAboutBox2Component', () => {
  let component: CountryAboutBox2Component;
  let fixture: ComponentFixture<CountryAboutBox2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryAboutBox2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryAboutBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
