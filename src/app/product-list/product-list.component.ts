import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/product-list.service';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(
    private productService: ProductListService,
    private authService: AuthService,
    private cartService: CartService ,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe(
      (data: any[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addProductToCart(product: any) {

    this.cartService.addProduct(product);
  }

  isAuthenticated(): boolean {
    return this.authService.getIsAuthenticated();
  }

  submitOrder() {
    const orderData = {
      products: this.cartService.getProductsInCart(),
      orderDate: new Date().toISOString(),
      customerId: this.authService.getUserId(),
      customerName: this.authService.getUserName()
    };

  
    this.productService.submitOrder(orderData).subscribe(
      (response) => {
        console.log('Order submitted successfully:', response);
   
        this.cartService.clearCart();
        setTimeout(() => {
          alert('Order sent!');
          this.router.navigate(['/orders']);
        }, 500);
      },
      (error) => {
        console.error('Error submitting order:', error);
 
      }
    );
  }

  
}
