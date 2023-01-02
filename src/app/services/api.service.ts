import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseLoginUrl: string = 'http://localhost:3000/auth/login';
  private baseRegisterUrl: string = 'http://localhost:3000/auth/register';
  
  constructor(private httpClient: HttpClient) {}

  // LOGIN WITH BEARER
  fetchLogin(email: string, password: string) {
    const params = new HttpParams().set('email', email).set('password', password);
    return this.httpClient.get(this.baseLoginUrl, { params, responseType: 'text' }).pipe(
      tap(data => {
        localStorage.setItem('sessionToken', data);
      }),
      take(1),
    );
  }

  fetchRegister(email: string, password: string, name: string) {
    const params = new HttpParams().set('email', email).set('password', password);
    return this.httpClient.post(this.baseRegisterUrl, { email, password }, { responseType: 'text' }).pipe(
      tap(data => {
        localStorage.setItem('currentUser', data);
      }),
      take(1),
    );
    // return this.httpClient.post(this.baseRegisterUrl, {email,password}, {responseType: 'text'}).subscribe(data => localStorage.setItem('currentUser', data));
  }
}
