import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, tap, switchMap, catchError } from 'rxjs/operators';

import * as updateArticleActions from 'src/app/editArticle/store/actions/updateArticle.action';
import { EditArticleService } from 'src/app/editArticle/services/editArticle.service';
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import { SaveArticleResponseInterface } from "src/app/shared/types/saveArticleResponse.interface";

@Injectable()
export class UpdateArticleEffect {
  updateArticle$ = createEffect(
    () => this.actions$.pipe(
      ofType(updateArticleActions.updateArticleStartAction),
      switchMap(({ slug, articleInput }) =>
        this.editArticleService
          .updateArticle({ slug, articleInput })
          .pipe(
            map((article: ArticleInterface) =>
              updateArticleActions.updateArticleSuccessAction({ article })
            ),
            catchError(() =>
              of(updateArticleActions.updateArticleFailureAction())
            )
          )
      )
    )
  );

  redirectAfterUpdate$ = createEffect(
    () => this.actions$.pipe(
      ofType(updateArticleActions.updateArticleSuccessAction),
      tap(({ article }) => this.router.navigate(['/articles', article.slug]))
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private editArticleService: EditArticleService
  ) {}
}

