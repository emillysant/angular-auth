import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LoginAPIClass } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // url = "https://api.escuelajs.co/api/v1/auth/"

  urlAPIclass = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) {}

  login(login: LoginAPIClass): Observable<LoginAPIClass> {
    console.log('login');
    return this.httpClient.post<LoginAPIClass>(
      this.urlAPIclass + 'login',
      login
    );
  }

  getUserRole(token: string): Observable<string> {
    return this.httpClient.get<string>(`${this.urlAPIclass}role`);
  }

  // getCurrentUser():Observable<User>{
  //   return this.httpClient.get<User>(this.url+"profile")
  // }
}
