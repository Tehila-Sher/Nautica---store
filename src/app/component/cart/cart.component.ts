import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCart();
  }

  plus(item: CartItem): void {
    this.cartService.addToCart(item.product);
    this.cartItems = this.cartService.getCart();
  }

  minus(item: CartItem): void {
    this.cartService.removeFromCart(item.product);
    this.cartItems = this.cartService.getCart();
  }
}
