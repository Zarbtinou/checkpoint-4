import { TestBed } from '@angular/core/testing';

import { GetpricesService } from './getprices.service';

describe('GetpricesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetpricesService = TestBed.get(GetpricesService);
    expect(service).toBeTruthy();
  });
});
