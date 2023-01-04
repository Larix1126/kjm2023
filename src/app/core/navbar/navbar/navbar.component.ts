import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from 'src/app/models/active-sprint-base-models.models';

@Component({
  selector: 'kjm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  private currentUserSubject: BehaviorSubject<IUser>;
  public currentUser: Observable<IUser>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('sessionToken')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public logout(): void {
    sessionStorage.removeItem('sessionToken');
    this.currentUserSubject.next(null);
  }
}
