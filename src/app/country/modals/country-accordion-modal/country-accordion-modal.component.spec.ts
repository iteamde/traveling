import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryAccordionModalComponent } from './country-accordion-modal.component';

describe('CountryAccordionModalComponent', () => {
  let component: CountryAccordionModalComponent;
  let fixture: ComponentFixture<CountryAccordionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryAccordionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryAccordionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
