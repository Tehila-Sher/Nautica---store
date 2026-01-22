import { Routes } from '@angular/router';
import { ShowAllProductsComponent } from './component/show-all-products/show-all-products.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { CartComponent } from './component/cart/cart.component';

export const routes: Routes = [
  { path: '', component: ShowAllProductsComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent }
];
