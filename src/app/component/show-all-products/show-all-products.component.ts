import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from '../../classes/products';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-all-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-all-products.component.html',
  styleUrl: './show-all-products.component.scss'
})
export class ShowAllProductsComponent implements OnInit {
  products: Products[] = [];
  showCart: boolean = false;

  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  viewDetails(item: Products): void {
    this.router.navigate(['/product', item.productId]);
  }

  addToCart(item: Products): void {
    this.cartService.addToCart(item);
    alert('המוצר נוסף לעגלה!');
  }

  ngOnInit(): void {
    this.loadProducts();

    this.productService.search$.subscribe(text => {
      if (!text) {
        this.loadProducts();
      } else {
        this.productService.getProductsByName(text).subscribe(data => {
          this.products = data.map(p => ({
            ...p,
            imageSrc: `https://localhost:7087${p.imageSrc}`
          }));
        });
      }
    });
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data.map(p => ({
        ...p,
        imageSrc: `https://localhost:7087${p.imageSrc}`
      }));
    });
  }

  setShowCart(val: boolean) {
    this.showCart = val;
  }
}
