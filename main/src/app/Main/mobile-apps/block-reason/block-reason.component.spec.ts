import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockReasonComponent } from './block-reason.component';

describe('BlockReasonComponent', () => {
  let component: BlockReasonComponent;
  let fixture: ComponentFixture<BlockReasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockReasonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
