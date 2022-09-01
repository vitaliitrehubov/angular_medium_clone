import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Router } from "@angular/router";
import { tap } from 'rxjs/operators';

import { PersistanceService } from "src/app/shared/services/persistance.service";
import { logoutAction } from "src/app/auth/store/actions/sync.action";

@Injectable()
export class LogoutEffect {
  logout$ = createEffect(
    () => this.actions$.pipe(
      ofType(logoutAction),
      tap(() => {
        this.persistanceService.set('token', '');
        this.router.navigate(['/']);
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private persistanceService: PersistanceService
  ) { }
}
