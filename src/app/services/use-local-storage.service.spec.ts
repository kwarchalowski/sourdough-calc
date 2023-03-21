import { TestBed } from '@angular/core/testing';

import { UseLocalStorageService } from './use-local-storage.service';

describe('UseLocalStorageService', () => {
  let service: UseLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
