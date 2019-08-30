import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorCalendarComponent } from './investor-calendar.component';

describe('InvestorCalendarComponent', () => {
  let component: InvestorCalendarComponent;
  let fixture: ComponentFixture<InvestorCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
