import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeReasonComponent } from './dispute-reason.component';

describe('DisputeReasonComponent', () => {
  let component: DisputeReasonComponent;
  let fixture: ComponentFixture<DisputeReasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeReasonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
