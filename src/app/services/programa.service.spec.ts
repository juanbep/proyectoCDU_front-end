import { TestBed } from '@angular/core/testing';

import { ProgramaService } from './programa.service';

describe('ProgramaService', () => {
  let service: ProgramaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
