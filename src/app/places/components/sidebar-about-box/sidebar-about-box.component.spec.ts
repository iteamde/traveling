import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAboutBoxComponent } from './sidebar-about-box.component';

describe('SidebarAboutBoxComponent', () => {
  let component: SidebarAboutBoxComponent;
  let fixture: ComponentFixture<SidebarAboutBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarAboutBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAboutBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
