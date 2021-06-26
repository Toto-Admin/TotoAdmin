import { TestBed } from '@angular/core/testing';

import { CancelReasonService } from './cancel-reason.service';

describe('CancelReasonService', () => {
  let service: CancelReasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancelReasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
