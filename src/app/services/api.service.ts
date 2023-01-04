import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseLoginUrl: string = `${environment.apiUrl}/auth/login`;
  private baseRegisterUrl: string = `${environment.apiUrl}/auth/register`;
  public bearerToken: string = sessionStorage.getItem('sessionToken');
  public headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.bearerToken}`,
  });

  constructor(private httpClient: HttpClient) {}

  // LOGIN WITH BEARER
  public fetchLogin(email: string, password: string) {
    const params = new HttpParams().set('email', email).set('password', password);
    return this.httpClient.get(this.baseLoginUrl, { params, responseType: 'text' }).pipe(
      tap(data => {
        sessionStorage.setItem('sessionToken', `Bearer ${data}`);
      }),
      take(1),
    );
  }
  // REGISTER WITH BEARER
  public fetchRegister(email: string, password: string, firstName: string, lastName: string) {
    const params = new HttpParams().set('email', email).set('password', password);

    return this.httpClient.post(this.baseRegisterUrl, { email, password, firstName, lastName }, { responseType: 'text' }).pipe(
      tap(data => {
        sessionStorage.setItem('sessionToken', `Bearer ${data}`);
      }),
      take(1),
    );
  }
}
