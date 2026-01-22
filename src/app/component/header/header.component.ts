import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchText: string = '';
  showCart: boolean = false;
  cartItems: any[] = [];

  constructor(private productsService: ProductsService, private cartService: CartService) {}

  onSearch(): void {
    this.productsService.setSearch(this.searchText);
  }

  toggleCart(): void {
    this.showCart = !this.showCart;
    if (this.showCart) {
      this.cartItems = this.cartService.getCart();
    }
  }
}
