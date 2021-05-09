import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';
// import { Empresa } from '../../models/citizen.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = environment.urlBase + '/login';
  constructor(private http: HttpClient) { }

  getToken(){
    const token =  localStorage.getItem('token');
    return token;
  }

  setToken(token){
    localStorage.setItem('token', token)
  }


  getHeader(){
    let token = this.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    return headers;
  }

  
  async validateLogin(user: string, password: string)  {
    return await this.http.post<any>(`${this.url}`, { userName: user, password, responseType: 'text'}).toPromise();
  }


  async isLoggedUser()  {
    let headers = this.getHeader();
    const options = {
      headers
      };
    return await this.http.get<boolean>(`${this.url}/validateToken`, options).toPromise();
  }

  async validateWitchRole() {
    let headers = this.getHeader();
    const options = {
      headers
      };

    return this.http.get<boolean>(`${this.url}`,options).toPromise();
  }
}
