import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ProductdataService } from '../services/productdata.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  showProductType: boolean = false;
  showSampleType: boolean = false;
  showPriceType: boolean = false;
  productType: string[] = [];

  //pagination
  p: number = 1;

  fitleredData: any[] = [];
  constructor(private productDataService: ProductdataService) { }

  ngOnInit(): void {
    this.fitleredData = this.productDataService.getAllData();
  }

  filterBasedOnSelection(e: any) {
    console.log(e.target.value)
  }

  getProductType(e: any) {

    if (e.target.checked)
      this.productType.push(e.target.value.toUpperCase())
    else {
      var index = this.productType.indexOf(e.target.value.toUpperCase(), 0);
      this.productType.splice(index, 1);


    }
    console.log(this.productType)
    this.p = 1;
    // if all unchecked
    if (this.productType.length == 0)
      this.fitleredData = this.productDataService.getAllData();
    else {
      this.fitleredData = this.productDataService.getDataByProductType(this.productType);
    }

  }


  toggleProductType() {
    this.showProductType = !this.showProductType;
  }
  toggleSampleType() {
    console.log('toggleSampleType')
    this.showSampleType = !this.showSampleType;
  }
  togglePrice() {
    this.showPriceType = !this.showPriceType;
  }


}
