import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { map, switchMap, tap, catchError } from 'rxjs/operators';

import * as loginActions from 'src/app/auth/store/actions/login.actions';
import { AuthService } from 'src/app/auth/services/auth.service';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { UserInterface } from 'src/app/shared/types/user.interface';
import { retrieveErrors } from 'src/app/auth/utils/retrieveErrors';

@Injectable()
export class LoginEffect {
  login$ = createEffect(
    () => this.actions$.pipe(
      ofType(loginActions.loginStartAction),
      switchMap(({ request }) =>
        this.authService
          .login(request)
          .pipe(
            map((user: UserInterface) => {
              this.persistanceService.set('token', user.token);

              return loginActions.loginSuccessAction({ user });
            }),
            catchError((errorResponse: HttpErrorResponse) => {
              const errors = retrieveErrors(errorResponse);

              return of(loginActions.loginFailureAction({ errors }));
            })
          )
      )
    )
  );

  redirect$ = createEffect(
    () => this.actions$.pipe(
      ofType(loginActions.loginSuccessAction),
      tap(() => this.router.navigateByUrl('/'))
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) { }
}

