
import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { ArticleService as SharedArticleService } from "src/app/shared/services/article.service";
import * as fetchArticleActions from 'src/app/article/store/actions/fetchArticle.action';

@Injectable()
export class FetchArticleEffect {
  fetchArticle$ = createEffect(
    () => this.actions$.pipe(
      ofType(fetchArticleActions.fetchArticleStartAction),
      switchMap(({ slug }) =>
        this.articleService
          .fetchArticle(slug)
          .pipe(
            map((article) =>
              fetchArticleActions.fetchArticleSuccessAction({ article })
            ),
            catchError(() => of(fetchArticleActions.fetchArticleFailureAction()))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private articleService: SharedArticleService
  ) {}
}

