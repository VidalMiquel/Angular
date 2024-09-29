import { TestBed } from '@angular/core/testing';

import { MyCvService } from './my-cv.service';

describe('MyCvService', () => {
  let service: MyCvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
