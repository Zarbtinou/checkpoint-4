import { TestBed } from '@angular/core/testing';

import { GetfoodService } from './getfood.service';

describe('GetfoodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetfoodService = TestBed.get(GetfoodService);
    expect(service).toBeTruthy();
  });
});
