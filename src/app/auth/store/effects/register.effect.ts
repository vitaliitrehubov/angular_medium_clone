import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { switchMap, catchError, map, tap } from "rxjs/operators";

import * as registerActions from 'src/app/auth/store/actions/registerActions';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserInterface } from "src/app/shared/types/user.interface";

@Injectable()
export class RegisterEffect {
  register$ = createEffect(
    () => this.actions$.pipe(
      ofType(registerActions.registerStartAction),
      switchMap(({ request }) =>
        this.authService
          .register(request)
          .pipe(
            map((user: UserInterface) =>
              registerActions.registerSuccessAction({ user })
            ),
            catchError(() => of(registerActions.registerFailureAction()))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) { }
}
