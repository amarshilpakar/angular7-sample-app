import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgyShareComponent } from './lodgy-share.component';

describe('LodgyShareComponent', () => {
  let component: LodgyShareComponent;
  let fixture: ComponentFixture<LodgyShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LodgyShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgyShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
