import { TestBed } from '@angular/core/testing';

import { ModulelService } from './modulel.service';

describe('ModulelService', () => {
  let service: ModulelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModulelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
