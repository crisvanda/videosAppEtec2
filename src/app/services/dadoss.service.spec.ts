import { TestBed } from '@angular/core/testing';

import { DadossService } from './dadoss.service';

describe('DadossService', () => {
  let service: DadossService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadossService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

