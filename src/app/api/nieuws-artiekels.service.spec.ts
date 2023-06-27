import { TestBed } from '@angular/core/testing';

import { NieuwsArtiekelsService } from './nieuws-artiekels.service';

describe('NieuwsArtiekelsService', () => {
  let service: NieuwsArtiekelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NieuwsArtiekelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
