import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutreachProgramsComponent } from './outreach-programs-content.component';

describe('OutreachProgramsComponent', () => {
  let component: OutreachProgramsComponent;
  let fixture: ComponentFixture<OutreachProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutreachProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutreachProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
