import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { UserProfileService } from 'src/app/userProfile/services/userProfile.service';
import { UserProfileInterface } from "src/app/userProfile/types/userProfile.interface";
import * as fetchUserProfileActions from 'src/app/userProfile/store/actions/fetchUserProfile.action';

@Injectable()
export class FetchUserProfileEffect {
  fetchUserProfile$ = createEffect(
    () => this.actions$.pipe(
      ofType(fetchUserProfileActions.fetchUserProfileStartAction),
      switchMap(({ slug }) =>
        this.userProfileService
          .fetchUserProfile(slug)
          .pipe(
            map((profile: UserProfileInterface) =>
              fetchUserProfileActions.fetchUserProfileSuccessAction({ profile })
            ),
            catchError(() =>
              of(fetchUserProfileActions.fetchUserProfileFailureAction())
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userProfileService: UserProfileService
  ) {}
}
