import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeReasonComponent } from './like-reason.component';

describe('LikeReasonComponent', () => {
  let component: LikeReasonComponent;
  let fixture: ComponentFixture<LikeReasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeReasonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
