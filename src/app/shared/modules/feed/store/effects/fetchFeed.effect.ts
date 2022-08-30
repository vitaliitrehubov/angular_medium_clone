import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as fetchFeedActions from 'src/app/shared/modules/feed/store/actions/fetchFeed.actions';
import { FeedService } from 'src/app/shared/modules/feed/services/feed.service';
import { FetchFeedResponseInterface } from "../../types/fetchFeedResponse.interface";

@Injectable()
export class FetchFeedEffect {
  fetchFeed$ = createEffect(
    () => this.actions$.pipe(
      ofType(fetchFeedActions.fetchFeedStartAction),
      switchMap(({ url }) =>
        this.feedService
          .fetchFeed(url)
          .pipe(
            map((feed: FetchFeedResponseInterface) =>
              fetchFeedActions.fetchFeedSuccessAction({ feed })
            ),
            catchError(() => of(fetchFeedActions.fetchFeedFailureAction()))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private feedService: FeedService
  ) { }
}
