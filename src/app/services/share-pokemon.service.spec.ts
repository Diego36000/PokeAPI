import { TestBed } from '@angular/core/testing';

import { SharePokemonService } from './share-pokemon.service';

describe('SharePokemonService', () => {
  let service: SharePokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharePokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
