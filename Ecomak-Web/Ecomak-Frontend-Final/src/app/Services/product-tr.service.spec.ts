import { TestBed } from '@angular/core/testing';

import { ProductTrService } from './product-tr.service';

describe('ProductTrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductTrService = TestBed.get(ProductTrService);
    expect(service).toBeTruthy();
  });
});
