import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from '../helper';
import {Subject} from 'rxjs';
import { Teacher } from 'src/app/pojo/teacher.model';
@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private http:HttpClient) {}



getTeacherInfo(standard:any): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  let url =baseUrl+'/api/teacher/'+standard;
  return this.http.get<Object>(url, { headers: headers });
}

addTeacher(teacher: Teacher): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<Object>(baseUrl+'/api/saveTeacher',teacher);
}

}
