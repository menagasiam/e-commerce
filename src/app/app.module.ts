import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatalogComponent } from './catalog/catalog.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PreviewComponent } from './preview/preview.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CartSharedService } from './services/cart-shared.service';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';

import { ToastrModule } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { ProductdataService } from './services/productdata.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule } from '@angular/forms';
import { ThankyoupageComponent } from './thankyoupage/thankyoupage.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CatalogComponent,
    FooterComponent,
    ProductCardComponent,
    CheckoutComponent,
    PreviewComponent,
    OrderSummaryComponent,
    NewCustomerComponent,
    ThankyoupageComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    NgxPaginationModule,
    MatBadgeModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [CartSharedService, ProductdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
