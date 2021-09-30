import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderLiftContentComponent } from './tender-lift-content.component';

describe('TenderLiftContentComponent', () => {
  let component: TenderLiftContentComponent;
  let fixture: ComponentFixture<TenderLiftContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenderLiftContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderLiftContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
