import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';
import { UserInterface } from 'src/app/shared/types/user.interface';
import { environment } from 'src/environments/environment';
import { AuthResponseInterface } from 'src/app/auth/types/authResponse.interface';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data: RegisterRequestInterface): Observable<UserInterface> {
    const url = `${environment.apiUrl}/users`;

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(({ user }) => user));
  }
}
