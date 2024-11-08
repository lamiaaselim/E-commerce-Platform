import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "http://localhost:8000/api/user";
  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Method to get a protected resource
  getProtectedResource(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`  // Set the token in Authorization header
    });
    return this.http.get(`${this.baseUrl}/protected`, { headers });
  }

  isAuthenticated(): boolean {
    return !!this.getToken();  // Checks if a token exists in local storage
  }

  // Optional: Logout method to clear token
  logout(): void {
    localStorage.removeItem('token');
  }
}
