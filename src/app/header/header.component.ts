import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartSharedService } from '../services/cart-shared.service';
import { WishlistSharedService } from '../wishlist-shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItemCount: number = 0;
  cartWishlistCount: number = 0;

  subscription?: Subscription;
  wishlistSubscription?: Subscription;

  constructor(private cardService: CartSharedService, private wishlistService: WishlistSharedService) { }

  ngOnInit(): void {
    this.subscription = this.cardService.cartItemCount.subscribe(value => {
      this.cartItemCount = value
    });

    this.wishlistSubscription = this.wishlistService.wishListItemCount.subscribe(value => {
      this.cartWishlistCount = value
    });
  }

}
