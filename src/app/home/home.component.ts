import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/product-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductListService) {}

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(
      (products: any[]) => {
        this.products = products;
      },
      error => {
        console.error(error);

      }
    );
  }
}
