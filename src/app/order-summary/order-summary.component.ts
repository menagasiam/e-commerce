import { Component, OnInit } from '@angular/core';
import { CartSharedService } from '../services/cart-shared.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  existingCartItem: any[] = [];
  subTotal: number = 0;

  constructor(private cartService: CartSharedService) { }

  ngOnInit(): void {
    this.existingCartItem = this.cartService.getCartData();

    this.calculateSubTotal();

  }

  removeItemFromCart(id: number) {
    this.cartService.removeCartData(id);
    this.calculateSubTotal();
  }

  removeQty(id: number) {
    this.cartService.removeQty(id);
    this.calculateSubTotal();
  }

  addQty(id: number) {
    this.cartService.addQty(id);
    this.calculateSubTotal();
  }

  calculateSubTotal() {
    this.subTotal = 0;
    this.existingCartItem.forEach(element => {
      this.subTotal = this.subTotal + (element.qty * element.price)
    });
  }

}
