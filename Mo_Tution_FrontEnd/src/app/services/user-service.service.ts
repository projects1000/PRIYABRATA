import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../UserAuth/user';
import baseUrl from './helper';
//const baseUrl = 'http://localhost:8080/api';
//const baseUrl = 'http://103.93.16.19:33320/api';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  
  constructor(private http:HttpClient) { }

  private apiUrl = 'http://localhost:8080/api';
 //private apiUrl = 'http://103.93.16.19:33320/api';

  // addUser(user?:User): Observable<Object> {
  //   return this.http.post<Object>('http://localhost:8080/api/create',user);
  // }
  addUser(user: User): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Object>(baseUrl+'/api/create',user);
  }

  // getUsers(): Observable<any> {
  //   return this.http.get<any>('http://localhost:8080/api/create');
  // }
  
  deleteUser(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = baseUrl+'/api/${id}';
    return this.http.delete(url, { headers });
  }

}
