import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasesAndPublicationsComponent } from './releases-and-publications.component';

describe('ReleasesAndPublicationsComponent', () => {
  let component: ReleasesAndPublicationsComponent;
  let fixture: ComponentFixture<ReleasesAndPublicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleasesAndPublicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasesAndPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
