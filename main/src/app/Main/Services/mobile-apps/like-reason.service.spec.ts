import { TestBed } from '@angular/core/testing';

import { LikeReasonService } from './like-reason.service';

describe('LikeReasonService', () => {
  let service: LikeReasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikeReasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
