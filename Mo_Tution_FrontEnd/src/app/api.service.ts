import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080/api'; // Replace this with your Spring Boot backend URL
 // private baseUrl = 'http://103.93.16.19:33320/api';
  constructor(private http: HttpClient) { }

  public getHelloWorld() {
    return this.http.get(`${this.baseUrl}/getDetails`);
  }

}
