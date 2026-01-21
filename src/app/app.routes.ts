import { Routes } from '@angular/router';
import { ShowAllProductsComponent } from './component/show-all-products/show-all-products.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';

export const routes: Routes = [
  { path: '', component: ShowAllProductsComponent },
  { path: 'product/:id', component: ProductDetailsComponent }
];
