import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../services/productdata.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  bestSellerData: any[] = [];
  outletData: any[] = [];
  newCollection: any[] = [];
  shopbyData: any[] = [];
  constructor(private productData: ProductdataService) { }


  ngOnInit(): void {
    this.bestSellerData = this.productData.getBestSellerData();
    this.outletData = this.productData.getOutletData();
    this.newCollection = this.productData.getNewCollectionData();
    this.shopbyData = this.productData.getShopByCategory('NECKLACE');
  }

  filterByType(type: string) {
    this.shopbyData = this.productData.getShopByCategory(type);
  }

}


