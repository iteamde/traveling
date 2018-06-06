import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryIndexesBoxComponent } from './country-indexes-box.component';

describe('CountryIndexesBoxComponent', () => {
  let component: CountryIndexesBoxComponent;
  let fixture: ComponentFixture<CountryIndexesBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryIndexesBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryIndexesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
