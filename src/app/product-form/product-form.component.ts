import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  productName: string = '';
  productPrice: number | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {

    const productData = { name: this.productName, price: this.productPrice };
    this.http.post('http://localhost:3000/products', productData).subscribe(
      (response) => {
        console.log('Product added successfully:', response);

        this.router.navigate(['/products']);
      },
      (error) => {
        console.error('Error adding product:', error);

      }
    );
  }
}
