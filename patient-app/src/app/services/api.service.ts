import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { text } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http = inject(HttpClient)
  constructor() { }

  private RegistrationUrl = '';
  private LoginUrl = '';

  registerUser(user:any):Observable<any>{
    return this.http.post<any>(this.RegistrationUrl,user,{responseType:'text' as 'json'} )
  }

  loginUser(user:any):Observable<any>{
    return this.http.post<any>(this.LoginUrl,user,{responseType :'text' as 'json'});
  }

  private login = false;

  isLoggedIn(value:boolean){
    this.login = value;
  }
   access(){
    return this.login;
   }

}
