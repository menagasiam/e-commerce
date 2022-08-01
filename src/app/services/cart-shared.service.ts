import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartSharedService {
  private cartData: CartItem[] = [];
  cartItemCount: BehaviorSubject<number> = new BehaviorSubject<number>(this.cartData.length);


  constructor() { }

  // store item into cart
  setCartData(title: string, price: number, imageUrl: string, id: number) {
    // check already product available
    var itemIndex = this.cartData.findIndex(x => x.id == id);
    if (itemIndex > -1) { // if available increase qty
      let existingQty = this.cartData[itemIndex].qty; // get existing qty
      this.cartData.splice(itemIndex, 1); // remove exisiting item from array

      // add new item with updated qty
      const data: CartItem = { title: title, price: price, imageUrl: imageUrl, id: id, qty: existingQty + 1 };
      this.cartData.push(data)
    } else { // not available add item 
      const data: CartItem = { title: title, price: price, imageUrl: imageUrl, id: id, qty: 1 };
      this.cartData.push(data)
    }
    debugger
    this.cartItemCount.next(this.cartData.length);
  }

  // get saved cart item
  getCartData(): any[] {
    return this.cartData;
  }


  //Remove item from saved data
  removeCartData(id: number) {
    console.log(this.cartData)
    var itemIndex = this.cartData.findIndex(x => x.id == id);
    this.cartData.splice(itemIndex, 1);
    console.log(this.cartData)
    this.cartItemCount.next(this.cartData.length);
  }

  addQty(id: number) {
    var itemIndex = this.cartData.findIndex(x => x.id == id);
    this.cartData[itemIndex].qty = this.cartData[itemIndex].qty + 1;
  }

  removeQty(id: number) {
    var itemIndex = this.cartData.findIndex(x => x.id == id);
    if (this.cartData[itemIndex].qty > 0)
      this.cartData[itemIndex].qty = this.cartData[itemIndex].qty - 1;
  }

  removeAllData() {
    this.cartData = [];
    this.cartItemCount.next(this.cartData.length);
  }
}

class CartItem {
  title: string = '';
  price: number = 0;
  imageUrl: string = '';
  id: number = 0;
  qty: number = 0;
}
