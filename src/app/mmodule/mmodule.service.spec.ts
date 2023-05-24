import { TestBed } from '@angular/core/testing';

import { MmoduleService } from './mmodule.service';

describe('MmoduleService', () => {
  let service: MmoduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MmoduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
