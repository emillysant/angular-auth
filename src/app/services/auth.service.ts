import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LoginAPIClass } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // url = "https://api.escuelajs.co/api/v1/auth/"

  urlAPIclass = "http://localhost:8080/auth/" 
  
  constructor(private httpClient: HttpClient) { }


  login(login:LoginAPIClass):Observable<LoginAPIClass> {
    return this.httpClient.post<LoginAPIClass>(this.urlAPIclass+"login", login)
  }



  // getCurrentUser():Observable<User>{
  //   return this.httpClient.get<User>(this.url+"profile")
  // }


}
