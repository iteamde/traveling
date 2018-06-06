import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryBudgetBoxComponent } from './country-budget-box.component';

describe('CountryBudgetBoxComponent', () => {
  let component: CountryBudgetBoxComponent;
  let fixture: ComponentFixture<CountryBudgetBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryBudgetBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryBudgetBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
