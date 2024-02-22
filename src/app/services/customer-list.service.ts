
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model'; 

@Injectable({
  providedIn: 'root',
})
export class CustomerListService {
  private apiUrl = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) {}

 getAllCustomers(): Observable<Customer[]> {

  return this.http.get<Customer[]>(this.apiUrl);
 }
}
