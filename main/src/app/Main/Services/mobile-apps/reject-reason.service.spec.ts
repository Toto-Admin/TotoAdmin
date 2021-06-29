import { TestBed } from '@angular/core/testing';

import { RejectReasonService } from './reject-reason.service';

describe('RejectReasonService', () => {
  let service: RejectReasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RejectReasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
