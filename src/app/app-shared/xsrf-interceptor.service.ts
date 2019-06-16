import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class XsrfInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const authToken = sessionStorage.getItem('AUTH_TOKEN');
    if (authToken) {
      console.log("XsrfInterceptorService intercept with token");
      const modifiedRequest = req.clone({ setHeaders: { "x-access-token": authToken } });
      return next.handle(modifiedRequest);
    } else {
      console.log("XsrfInterceptorService intercept without token");
      return next.handle(req);
    }
  }

}
