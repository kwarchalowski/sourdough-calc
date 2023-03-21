import { TestBed } from '@angular/core/testing';

import { BreadComponentsService } from './bread-components.service';

describe('BreadComponentsService', () => {
  let service: BreadComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreadComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
