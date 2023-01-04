import { Injectable } from '@angular/core';
import { IUser } from '../models/active-sprint-base-models.models';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}
  public getAccessToken(): string {
    return sessionStorage.getItem('sessionToken');
  }
  public setAccessToken(token: string): void {
    sessionStorage.setItem('sessionToken', token);
  }
  public removeAccessToken(): void {
    sessionStorage.removeItem('sessionToken');
  }
  public decodeJwtToken(token: string): IUser {
    try {
      return jwtDecode(token);
    } catch (e) {
      return undefined;
    }
  }
}
