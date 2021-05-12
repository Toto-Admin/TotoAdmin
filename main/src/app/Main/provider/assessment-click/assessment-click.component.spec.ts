import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentClickComponent } from './assessment-click.component';

describe('AssessmentClickComponent', () => {
  let component: AssessmentClickComponent;
  let fixture: ComponentFixture<AssessmentClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
