import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private addedProducts: any[] = [];

  getAddedProducts(): any[] {
    return this.addedProducts;
  }

  addProduct(product: any): void {
    this.addedProducts.push(product);
  }

  clearCart(): void {
    this.addedProducts = [];
  }
  getProductsInCart(): any[] {
    return this.addedProducts;
  }
}
