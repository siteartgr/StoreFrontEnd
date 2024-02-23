
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
