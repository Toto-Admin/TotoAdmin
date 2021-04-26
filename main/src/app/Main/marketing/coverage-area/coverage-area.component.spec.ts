import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageAreaComponent } from './coverage-area.component';

describe('CoverageAreaComponent', () => {
  let component: CoverageAreaComponent;
  let fixture: ComponentFixture<CoverageAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverageAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
