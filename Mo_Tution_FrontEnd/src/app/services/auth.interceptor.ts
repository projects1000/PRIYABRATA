import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HTTP_INTERCEPTORS,
  } from '@angular/common/http';
  import { LoginService } from './login.service';
  import { Observable } from 'rxjs';
  import { Injectable } from '@angular/core';
//const TOKEN_HEADER='Authorization';
@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
    constructor(private login:LoginService)
    {

    }
    //this will add the token 
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
        //add the jwt token (localStorage) request
        let authReq=req;
     const token =this.login.getToken();
     console.log("Inside interceptor");
     if(token!=null)
     {
           authReq=authReq.clone({
            setHeaders:{Authorization: 'Bearer '+token},

        });
     }
      return next.handle(authReq);
      }
}

export const authInterceptorProviders = [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ];