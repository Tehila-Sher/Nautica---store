import { Injectable } from '@angular/core';
import { Products } from '../classes/products';

export interface CartItem {
  product: Products;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];

  addToCart(product: Products): void {
    const found = this.cart.find(item => item.product.productId === product.productId);
    if (found) {
      found.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
  }

  removeFromCart(product: Products): void {
    const idx = this.cart.findIndex(item => item.product.productId === product.productId);
    if (idx > -1) {
      this.cart[idx].quantity--;
      if (this.cart[idx].quantity <= 0) {
        this.cart.splice(idx, 1);
      }
    }
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  clearCart(): void {
    this.cart = [];
  }
}
