import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError, tap } from "rxjs/operators";

import * as deleteArticleActions from 'src/app/article/store/actions/deleteArticle.action';
import { ArticleService } from 'src/app/article/services/article.service';

@Injectable()
export class DeleteArticleEffect {
  deleteArticle$ = createEffect(
    () => this.actions$.pipe(
      ofType(deleteArticleActions.deleteArticleStartAction),
      switchMap(({ slug }) =>
        this.articleService
          .deleteArticle(slug)
          .pipe(
            map(() => deleteArticleActions.deleteArticleSuccessAction()),
            catchError(() => of(deleteArticleActions.deleteArticleFailureAction()))
          )
      )
    )
  );

  redirect$ = createEffect(
    () => this.actions$.pipe(
      ofType(deleteArticleActions.deleteArticleSuccessAction),
      tap(() => this.router.navigateByUrl('/'))
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private articleService: ArticleService
  ) { }
}
