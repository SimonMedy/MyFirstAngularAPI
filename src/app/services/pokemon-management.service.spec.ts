import { TestBed } from '@angular/core/testing';

import { PokemonManagementService } from './pokemon-management.service';

describe('PokemonManagementService', () => {
  let service: PokemonManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
