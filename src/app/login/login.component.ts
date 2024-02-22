
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {

    if (this.authService.getIsAuthenticated()) {
      this.router.navigate(['/products']);
    }
  }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      success => {
        if (success) {
          this.router.navigate(['/products']);
        } else {
          this.loginError = 'Cannot login. Please check your username and password.';
          this.clearForm();
        }
      },
      error => {
        console.error(error);
   
      }
    );
  }

  clearForm(): void {
    this.username = '';
    this.password = '';
  }
}
