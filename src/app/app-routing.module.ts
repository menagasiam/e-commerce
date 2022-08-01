import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MainComponent } from './main/main.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { PreviewComponent } from './preview/preview.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ThankyoupageComponent } from './thankyoupage/thankyoupage.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'catalog', component: CatalogComponent
  },
  {
    path: 'product-card', component: ProductCardComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'thankyou', component: ThankyoupageComponent
  },
  {
    path: 'order-summary', component: OrderSummaryComponent
  },
  {
    path: 'new-customer', component: NewCustomerComponent
  },
  {
    path: 'wishlist', component: WishlistComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
