import { TestBed } from '@angular/core/testing';

import { MobileContentService } from './mobile-content.service';

describe('MobileContentService', () => {
  let service: MobileContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
