import { TestBed } from '@angular/core/testing';

import { BerryServiceService } from './berry-service.service';

describe('BerryServiceService', () => {
  let service: BerryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BerryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
