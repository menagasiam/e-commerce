import { Component, OnInit } from '@angular/core';
import { WishlistSharedService } from '../wishlist-shared.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  existingWishlistItem: any[] = [];


  constructor(private wishListService: WishlistSharedService) { }

  ngOnInit(): void {
    this.existingWishlistItem = this.wishListService.getWishListData();
  }

  removeItemFromCart(id: number) {
    this.wishListService.removeWishListData(id);
  }

}
