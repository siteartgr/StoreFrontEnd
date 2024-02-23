
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://storebackend-629t.onrender.com/customers';
  private tokenKey = 'authToken';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((users) => {
        const user = users.find((u) => u.username === username && u.password === password);
        if (user) {

          sessionStorage.setItem(this.tokenKey, 'your-secret-token');
          return true;
        } else {
          return false;
        }
      })
    );
  }

  logout(): void {

    sessionStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  getIsAuthenticated(): boolean {

    return !!sessionStorage.getItem(this.tokenKey);
  }
}
