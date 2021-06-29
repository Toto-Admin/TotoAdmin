import { TestBed } from '@angular/core/testing';

import { BlockReasonService } from './block-reason.service';

describe('BlockReasonService', () => {
  let service: BlockReasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockReasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
