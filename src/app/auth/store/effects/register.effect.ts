import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { HttpErrorResponse } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { switchMap, catchError, map, tap } from "rxjs/operators";

import * as registerActions from 'src/app/auth/store/actions/register.actions';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserInterface } from "src/app/shared/types/user.interface";
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { retrieveErrors } from 'src/app/auth/utils/retrieveErrors';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(
    () => this.actions$.pipe(
      ofType(registerActions.registerStartAction),
      switchMap(({ request }) =>
        this.authService
          .register(request)
          .pipe(
            map((user: UserInterface) => {
              this.persistanceService.set('token', user.token);

              return registerActions.registerSuccessAction({ user })
            }),
            catchError((errorResponse: HttpErrorResponse) => {
              const errors = retrieveErrors(errorResponse);

              return of(registerActions.registerFailureAction({ errors }));
            })
          )
      )
    )
  );

  redirect$ = createEffect(
    () => this.actions$.pipe(
      ofType(registerActions.registerSuccessAction),
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

