
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, tap, catchError } from 'rxjs/operators';

import { CreateArticleService } from 'src/app/createArticle/services/createArticle.service';
import * as createArticleActions from 'src/app/createArticle/store/actions/createArticle.action';

@Injectable()
export class CreateArticleEffect {
  createArticle$ = createEffect(
    () => this.actions$.pipe(
      ofType(createArticleActions.createArticleStartAction),
      switchMap(({ article }) =>
        this.createArticleService
          .createArticle(article)
          .pipe(
            map((article) =>
              createArticleActions.createArticleSuccessAction({ article })
            ),
            catchError(({ error: { errors } }: HttpErrorResponse) =>
              of(createArticleActions.createArticleFailureAction({ errors }))
            )
          )
      )
    )
  );

  redirectAfterCreate$ = createEffect(
    () => this.actions$.pipe(
      ofType(createArticleActions.createArticleSuccessAction),
      tap(({ article }) =>
        this.router.navigate(['/articles', article.slug])
      )
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private createArticleService: CreateArticleService
  ) {}
}
