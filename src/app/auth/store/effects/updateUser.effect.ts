
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';

import * as updateUserActions from 'src/app/auth/store/actions/updateUser.actions';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserInterface } from "src/app/shared/types/user.interface";
import { UserInputInterface } from 'src/app/shared/types/userInput.interface';

@Injectable()
export class UpdateUserEffect {
  updateUser$ = createEffect(
    () => this.actions$.pipe(
      ofType(updateUserActions.updateUserStartAction),
      switchMap(({ userInput }) =>
        this.authService
          .updateUserInfo(userInput)
          .pipe(
            map((user) => updateUserActions.updateUserSuccessAction({ user })),
            catchError(() => of(updateUserActions.updateUserFailureAction()))
          )
      )
    )
  );

  // redirectAfterUpdate$ = createEffect(
  //   () => this.actions$.pipe(
  //     ofType(updateUserActions.updateUserSuccessAction),
  //     tap(() => this.router.navigate(['/']))
  //   ),
  //   { dispatch: false }
  // );

  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService
  ) {}
}
