import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs';

import * as fetchUserActions from 'src/app/auth/store/actions/fetchUser.actions';
import { AuthService } from 'src/app/auth/services/auth.service';
import { PersistanceService } from 'src/app/shared/services/persistance.service';

@Injectable()
export class FetchUserEffect {
  fetchUser$ = createEffect(
    () => this.actions$.pipe(
      ofType(fetchUserActions.fetchUserStartAction),
      switchMap(() =>
        this.persistanceService.get('token')
          ? this.authService
              .fetchUser()
              .pipe(
                map((user) => fetchUserActions.fetchUserSuccessAction({ user })),
                catchError(() => of(fetchUserActions.fetchUserFailureAction()))
              )
          : of(fetchUserActions.fetchUserFailureAction())
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) { }
}
