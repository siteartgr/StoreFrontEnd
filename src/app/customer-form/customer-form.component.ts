import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {

  customerName: string = '';
  customerPass: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {

    const customerData = { username: this.customerName, password: this.customerPass };
    this.http.post('http://localhost:3000/customers', customerData).subscribe(
      (response) => {
        console.log('Customer added successfully:', response);
     
        this.router.navigate(['/customers']);
      },
      (error) => {
        console.error('Error adding customer:', error);
     
      }
    );
  }
}
