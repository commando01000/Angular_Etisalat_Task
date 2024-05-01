import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CrudInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Clone the request to add the new header.
    const modifiedRequest = request.clone({
      headers: request.headers.set(
        'Content-type',
        'application/json; charset=UTF-8'
      ),
    });

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(modifiedRequest);
  }
}
