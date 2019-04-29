import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserDTO} from '../model/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/module';
  private adminUrl = 'http://localhost:8080/api/test/admin';

  constructor(private http: HttpClient) { }

  getAuthPing(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }

  getAllUsers() {
    return this.http.get<UserDTO[]>('http://localhost:8080/user');
  }

  getModuleCount(username: string) {
    return this.http.post<number>('http://localhost:8080/user/count', username);
  }

  deleteUser(username: string) {
    return this.http.delete('http://localhost:8080/user/' + username);
  }
}
