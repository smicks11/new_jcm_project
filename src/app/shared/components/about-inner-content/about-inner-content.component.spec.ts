import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInnerContentComponent } from './about-inner-content.component';

describe('AboutInnerContentComponent', () => {
  let component: AboutInnerContentComponent;
  let fixture: ComponentFixture<AboutInnerContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutInnerContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutInnerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
