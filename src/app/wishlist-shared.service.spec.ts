import { TestBed } from '@angular/core/testing';

import { WishlistSharedService } from './wishlist-shared.service';

describe('WishlistSharedService', () => {
  let service: WishlistSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishlistSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
