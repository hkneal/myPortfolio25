import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpentryComponent } from './carpentry.component';

describe('CarpentryComponent', () => {
  let component: CarpentryComponent;
  let fixture: ComponentFixture<CarpentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
