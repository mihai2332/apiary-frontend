import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SignUpInfo} from './model/sigup-info';
import {JwtResponse} from './model/jwt-response';
import {AuthLoginInfo} from './model/login-info';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() isLoggedIn: EventEmitter<any> = new EventEmitter();

  private URL = 'http://localhost:8080/api/auth/';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.URL + 'signin', credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.URL + 'signup', info, httpOptions);
  }
}
