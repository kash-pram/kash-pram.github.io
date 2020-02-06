import { TestBed } from '@angular/core/testing';

import { LoaderEmitterService } from './loader-emitter.service';

describe('LoaderEmitterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoaderEmitterService = TestBed.get(LoaderEmitterService);
    expect(service).toBeTruthy();
  });
});
