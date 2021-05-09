import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';
// import { Empresa } from '../../models/citizen.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = environment.urlBase + '/task';
  constructor(private http: HttpClient) { }
  getToken(){
    const token =  localStorage.getItem('token');
    return token;
  }
  getHeader(){
    let token = this.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    return headers;
  }


  getAll(): Observable<Task[]>  {
    let headers = this.getHeader();
    const options = {
      headers
      };
    return this.http.get<Task[]>(`${this.url}/getall`, options);
  }

  delete(id: number): Observable<boolean>  {
    let headers = this.getHeader();
    const options = {
      headers
      };
    return this.http.delete<boolean>(`${this.url}?id=${id}`, options);
  }

  getById(id: number): Observable<Task>  {
    let headers = this.getHeader();
    const options = {
      headers
      };
    return this.http.get<Task>(`${this.url}?id=${id}`, options);
  }


  getByName(name: string): Observable<Task[]>  {
    let headers = this.getHeader();
    const options = {
      headers
      };
    return this.http.get<Task[]>(`${this.url}/GetByName?name=${name}`, options);
  }


  update(entity: Task): Observable<boolean>  {
    let headers = this.getHeader();
    const options = {
      headers
      };
    return this.http.put<any>(`${this.url}/update`, entity, options);
  }

  create(entity: Task): Observable<boolean>  {
    let headers = this.getHeader();
    const options = {
      headers
      };
    return this.http.post<any>(`${this.url}/insert`, entity, options);
  }
}
