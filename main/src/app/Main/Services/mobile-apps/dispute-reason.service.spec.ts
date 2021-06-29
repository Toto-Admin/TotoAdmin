import { TestBed } from '@angular/core/testing';

import { DisputeReasonService } from './dispute-reason.service';

describe('DisputeReasonService', () => {
  let service: DisputeReasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisputeReasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
