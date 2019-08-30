import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgyAsInvestmentComponent } from './lodgy-as-investment.component';

describe('LodgyAsInvestmentComponent', () => {
  let component: LodgyAsInvestmentComponent;
  let fixture: ComponentFixture<LodgyAsInvestmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LodgyAsInvestmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgyAsInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
