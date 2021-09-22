import { TestBed } from '@angular/core/testing';

import { CategoryTrService } from './category-tr.service';

describe('CategoryTrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryTrService = TestBed.get(CategoryTrService);
    expect(service).toBeTruthy();
  });
});
