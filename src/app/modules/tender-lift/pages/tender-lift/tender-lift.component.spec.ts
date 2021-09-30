import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderLiftComponent } from './tender-lift.component';

describe('TenderLiftComponent', () => {
  let component: TenderLiftComponent;
  let fixture: ComponentFixture<TenderLiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenderLiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderLiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
