import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartSharedService } from '../services/cart-shared.service';
import { ToastrService } from 'ngx-toastr';
import { ProductdataService } from '../services/productdata.service';
import { WishlistSharedService } from '../wishlist-shared.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  currentProduct: any = {};
  PopularData: any[] = [];
  similarData: any[] = [];


  constructor(private router: ActivatedRoute, private cartService: CartSharedService,
    private toastr: ToastrService, private productCartService: ProductdataService,
    private wishlistService: WishlistSharedService) { }

  ngOnInit(): void {
    //get best seller
    this.PopularData = this.productCartService.getBestSellerData();


    this.router.queryParams.subscribe((params: any) => {
      console.log(params.productId);

      //filter
      this.changeProduct(params.productId);



    })

    // get similar data by category
    this.similarData = this.productCartService.getShopByCategory(this.currentProduct.type);
  }

  changeProduct(id: string) {
    var data = this.productCartService.getAllData().filter((element) => {
      if (id == element.id)
        return element;
      else
        return;
    })
    this.currentProduct = (data[0]);
  }

  addItemToCart() {
    let price = this.currentProduct.discountPrice > 0 ? this.currentProduct.discountPrice : this.currentProduct.actualPrice;
    this.cartService.setCartData(this.currentProduct.title, price,
      this.currentProduct.imageUrl, this.currentProduct.id);
    this.toastr.success('Item added to cart.');
    console.log(this.cartService.getCartData())


  }

  addItemToWishList() {
    let price = this.currentProduct.discountPrice > 0 ? this.currentProduct.discountPrice : this.currentProduct.actualPrice;
    this.wishlistService.setWishListData(this.currentProduct.title, price,
      this.currentProduct.imageUrl, this.currentProduct.id)
  }


}
