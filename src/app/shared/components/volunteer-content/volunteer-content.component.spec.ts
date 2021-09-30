import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerContentComponent } from './volunteer-content.component';

describe('VolunteerContentComponent', () => {
  let component: VolunteerContentComponent;
  let fixture: ComponentFixture<VolunteerContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
