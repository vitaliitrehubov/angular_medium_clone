import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { AddToFavoritesService } from 'src/app/shared/modules/addToFavorites/services/addToFavorites.service';
import * as addToFavoritesActions from 'src/app/shared/modules/addToFavorites/store/actions/addToFavorites.action';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

@Injectable()
export class AddToFavoritesEffect {
  toggleFavorites$ = createEffect(
    () => this.actions$.pipe(
      ofType(addToFavoritesActions.addToFavoritesStartAction),
      switchMap(({ isFavorited, slug }) =>
        this.addToFavoritesService
          [isFavorited ? 'addToFavorites' : 'removeFromFavorites'](slug)
          .pipe(
            map((article: ArticleInterface) =>
              addToFavoritesActions.addToFavoritesSuccessAction({ article })
            ),
            catchError(() =>
              of(addToFavoritesActions.addToFavoritesFailureAction())
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private addToFavoritesService: AddToFavoritesService
  ) { }
}
