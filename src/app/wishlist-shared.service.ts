import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistSharedService {
  wishListData: any[] = [];
  wishListItemCount: BehaviorSubject<number> = new BehaviorSubject<number>(this.wishListData.length);

  constructor() { }

  setWishListData(title: string, price: number, imageUrl: string, id: number) {
    var itemIndex = this.wishListData.findIndex(x => x.id == id);
    if (itemIndex < 0) {
      const data: WishListItem = { title: title, price: price, imageUrl: imageUrl, id: id };
      this.wishListData.push(data)
    }
    else {
      this.wishListData.splice(itemIndex, 1);
    }
    this.wishListItemCount.next(this.wishListData.length);
  }

  removeWishListData(id: number) {
    var itemIndex = this.wishListData.findIndex(x => x.id == id);
    this.wishListData.splice(itemIndex, 1);
    this.wishListItemCount.next(this.wishListData.length);
  }

  getWishListData() {
    return this.wishListData;
  }
}


class WishListItem {
  title: string = '';
  price: number = 0;
  imageUrl: string = '';
  id: number = 0;
}
