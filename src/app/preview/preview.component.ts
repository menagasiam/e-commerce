import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartSharedService } from '../services/cart-shared.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @Input() contactInfo: any = {};
  @Input() shippingInfo: any = {};
  @Input() paymentInfo: any = {};

  @Output() hidePreviewInfoShipping = new EventEmitter();
  @Output() hidePreviewInfoPayment = new EventEmitter();

  existingCartItem: any[] = [];
  subTotal: number = 0;

  constructor(private cartService: CartSharedService) { }

  ngOnInit(): void {
    this.existingCartItem = this.cartService.getCartData();
    this.calculateSubTotal();
  }

  previewShippingAddressChange() {
    console.log('previewShippingAddressChange called')
    this.hidePreviewInfoShipping.emit()
  }

  previewPaymentChange() {
    this.hidePreviewInfoPayment.emit();
  }

  calculateSubTotal() {
    this.subTotal = 0;
    this.existingCartItem.forEach(element => {
      this.subTotal = this.subTotal + (element.qty * element.price)
    });
  }

  navigateThankyouPage() {
    this.cartService.removeAllData();


  }


}
