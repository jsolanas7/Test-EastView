import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Citizen } from '../../models/citizen.model';

@Injectable({
  providedIn: 'root'
})
export class CitizenService {

  url = environment.urlBase + '/citizen';
  constructor(private http: HttpClient) { }


  getToken(){
    const token =  localStorage.getItem('token');
    return token;
  }
  getHeader(){
    let token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })

    return headers;
  }
  getAll(): Observable<Citizen[]>  {
    const body = { includes: [] };
    let headers = this.getHeader();

    return this.http.get<Citizen[]>(`${this.url}/getall?child=CitizenTasks.Task`, {headers});
  }

  delete(id: number): Observable<any>  {
    let headers = this.getHeader();
    const options = {
      headers
      };
    return this.http.delete<any>(`${this.url}?id=${id}`, options);
  }

  getById(id: number): Observable<Citizen>  {
    let headers = this.getHeader();
    const options = {
      headers
      };
    return this.http.get<Citizen>(`${this.url}?id=${id}`, options);
  }

  update(entity: Citizen): Observable<boolean>  {
    let headers = this.getHeader();
    const options = {
      headers
      };
    return this.http.put<any>(`${this.url}/update`, entity , options);
  }

  create(entity: Citizen): Observable<boolean>  {
    let headers = this.getHeader();
    const options = {
      headers
      };
    return this.http.post<any>(`${this.url}`, entity , options);
  }
}
