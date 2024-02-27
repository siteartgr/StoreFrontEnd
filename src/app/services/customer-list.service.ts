
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Customer } from '../models/customer.model'; 

@Injectable({
  providedIn: 'root',
})
export class CustomerListService {
  private apiUrl = 'https://storebackend-629t.onrender.com/customers';

  constructor(private http: HttpClient) {}

 getAllCustomers(): Observable<Customer[]> {

  return this.http.get<Customer[]>(this.apiUrl);
 }
 getCustomerById(customerId: string): Observable<Customer | undefined> {
  return this.getAllCustomers().pipe(
    map(customers => customers.find(customer => (customer.id as any) === customerId))
  );
}
}
