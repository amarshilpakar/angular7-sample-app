import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressMaterialComponent } from './press-material.component';

describe('PressMaterialComponent', () => {
  let component: PressMaterialComponent;
  let fixture: ComponentFixture<PressMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
