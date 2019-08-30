import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeAtLodgyComponent } from './life-at-lodgy.component';

describe('LifeAtLodgyComponent', () => {
  let component: LifeAtLodgyComponent;
  let fixture: ComponentFixture<LifeAtLodgyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeAtLodgyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeAtLodgyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
