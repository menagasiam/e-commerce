import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartSharedService } from '../services/cart-shared.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  hideContactInfo: boolean = false;
  hideShippingInfo: boolean = true;
  hidePaymentInfo: boolean = true;


  existingCartItem: any[] = [];
  subTotal: number = 0;
  togglePreviewComponent: boolean = false;


  //ng model
  contactInfo = {
    email: '',
  }



  shippingInfo = {

    firstName: '',
    lastName: '',
    country: '',
    street: '',
    inputAddress2: '',
    inputState: '',
    inputZip: '',
    phoneNumber: '',
  }

  paymentInfo = {
    cardNumber: '',
    shipEmailField1: '',
    shipEmailField2: '',
    holderName: '',
  }



  constructor(private cartService: CartSharedService) { }

  ngOnInit(): void {
    this.existingCartItem = this.cartService.getCartData();
    this.calculateSubTotal();
  }

  contactInfoContinue() {
    console.log('Clicked')

    this.hideContactInfo = !this.hideContactInfo;
    this.hideShippingInfo = !this.hideShippingInfo;
  }

  shippingInfoContinue() {
    this.hideShippingInfo = !this.hideShippingInfo;
    this.hidePaymentInfo = !this.hidePaymentInfo;
  }

  paymentInfoContinue() {
    this.hidePaymentInfo = true;
    this.togglePreviewComponent = true;
  }

  contactChange() {
    this.hideContactInfo = false;
    this.hideShippingInfo = true;
    this.hidePaymentInfo = true;
  }

  shippingChange() {
    this.hideContactInfo = true;
    this.hideShippingInfo = false;
    this.hidePaymentInfo = true;
  }

  paymentChange() {
    this.hideContactInfo = true;
    this.hideShippingInfo = true;
    this.hidePaymentInfo = false;
  }


  previewShippingAddressChange() {
    console.log('previewShippingAddressChange called checkout')
    this.togglePreviewComponent = false;
    this.hideContactInfo = true;
    this.hideShippingInfo = false;
    this.hidePaymentInfo = true;
  }

  previewPaymentChange() {
    this.togglePreviewComponent = false;
    this.hideContactInfo = true;
    this.hideShippingInfo = true;
    this.hidePaymentInfo = false;
  }

  calculateSubTotal() {
    this.subTotal = 0;
    this.existingCartItem.forEach(element => {
      this.subTotal = this.subTotal + (element.qty * element.price)
    });
  }
}
