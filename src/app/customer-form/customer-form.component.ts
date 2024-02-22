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
    // Make a POST request to your backend API
    const customerData = { username: this.customerName, password: this.customerPass };
    this.http.post('http://localhost:3000/customers', customerData).subscribe(
      (response) => {
        console.log('Customer added successfully:', response);
        // Redirect to the product list or any other page after successful submission
        this.router.navigate(['/customers']);
      },
      (error) => {
        console.error('Error adding customer:', error);
        // Handle error if needed
      }
    );
  }
}
