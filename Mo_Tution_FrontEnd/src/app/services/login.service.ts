import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject=new Subject<boolean>();

  constructor(private http:HttpClient) {}

  public getCurrentUser()
  {
    //return this.http.get('http://localhost:8080/current-user');
    //return this.http.get('http://103.93.16.19:33320/current-user');
    return this.http.get(baseUrl+'/current-user');
    
  }
//generate token
public generateToken(loginData:any)
{
  return this.http.post(baseUrl+'/generate-token',loginData);
  //return this.http.post('http://localhost:8080/generate-token',loginData);
  //return this.http.post('http://103.93.16.19:33320/generate-token',loginData);
}

//Login user: Set token in local
public loginUser(token:any)
{
  localStorage.setItem('token',token);
 // this.loginStatusSubject.next(true);
  return true;
}

//IsLoggedIn or not
public isLoggedIn()
{
  let tokenStr=localStorage.getItem("token");
  if(tokenStr==undefined || tokenStr=='' ||tokenStr==null)
  {
    return false;
  }else{
    return  true;
  }

}

//logout :remove token from local storage
public logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return true;
}

//get token
public getToken(){
  return localStorage.getItem('token');
}

//set User
public setUser(user:any)
{
  localStorage.setItem("user",JSON.stringify(user));
}

//getUser
public getUser()
{
  let userStr=localStorage.getItem("user");
  if(userStr!=null)
  {
    return JSON.parse(userStr);
  }
  else{
    this.logout();
    return null;
  }
}

  //getUser Role
  public getUserRole()
  {
   let user=this.getUser();
   //if multiple roles then can return list or array i.e authorities.
   return user.authorities[0].authority; 
  }
}
