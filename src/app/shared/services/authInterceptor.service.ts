import { Injectable } from "@angular/core";
import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

import { PersistanceService } from 'src/app/shared/services/persistance.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private persistanceService: PersistanceService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.persistanceService.get('token');

    request = request.clone({
      setHeaders: {
        'Authorization': token ? `Token ${token}` : ''
      }
    });

    return next.handle(request);
  }
}
