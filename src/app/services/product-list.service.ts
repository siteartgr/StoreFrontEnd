
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private apiUrl = 'https://storebackend-629t.onrender.com/products';
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }


  submitOrder(orderData: any): Observable<any> {
    const orderApiUrl = 'https://storebackend-629t.onrender.com//orders';
    
    const productNames = orderData.products.map((product: any) => product.name);
  
    const updatedOrderData = {
      ...orderData,
      products: productNames,
    };
  
    console.log(updatedOrderData);
  
    return this.http.post(orderApiUrl, updatedOrderData);
  }
}
