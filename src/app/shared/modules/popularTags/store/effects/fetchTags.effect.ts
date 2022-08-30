import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fetchTagsActions from 'src/app/shared/modules/popularTags/store/actions/fetchTags.action';
import { PopularTagsService } from 'src/app/shared/modules/popularTags/services/popularTags.service';

@Injectable()
export class FetchTagsEffect {
  fetchTags$ = createEffect(
    () => this.actions$.pipe(
      ofType(fetchTagsActions.fetchTagsStartAction),
      switchMap(() =>
        this.popularTagsService
          .fetchPopularTags()
          .pipe(
            map((tags) => fetchTagsActions.fetchTagsSuccessAction({ tags })),
            catchError(() => of(fetchTagsActions.fetchTagsFailureAction()))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) { }
}
