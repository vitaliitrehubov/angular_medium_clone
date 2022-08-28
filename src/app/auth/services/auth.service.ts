import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';
import { LoginRequestInterface } from 'src/app/auth/types/loginRequest.interface';
import { UserInterface } from 'src/app/shared/types/user.interface';
import { environment } from 'src/environments/environment';
import { AuthResponseInterface } from 'src/app/auth/types/authResponse.interface';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data: RegisterRequestInterface): Observable<UserInterface> {
    return this.http
      .post<AuthResponseInterface>(environment.apiUrlRegister, data)
      .pipe(map(this.retrieveUser))
  }

  login(data: LoginRequestInterface): Observable<UserInterface> {
    return this.http
      .post<AuthResponseInterface>(environment.apiUrlLogin, data)
      .pipe(map(this.retrieveUser))
  }

  fetchUser(): Observable<UserInterface> {
    return this.http
      .get<AuthResponseInterface>(environment.apiUrlUser)
      .pipe(map(this.retrieveUser))
  }

  retrieveUser({ user }: AuthResponseInterface): UserInterface {
    return user
  }
}

