import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryAboutBoxComponent } from './country-about-box.component';

describe('CountryAboutBoxComponent', () => {
  let component: CountryAboutBoxComponent;
  let fixture: ComponentFixture<CountryAboutBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryAboutBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryAboutBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
