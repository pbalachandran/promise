import { TestBed } from '@angular/core/testing';

import { SlowServiceService } from './slow-service.service';

describe('SlowServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlowServiceService = TestBed.get(SlowServiceService);
    service.slow();
  });
});
