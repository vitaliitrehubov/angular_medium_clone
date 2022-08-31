import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'src/app/createArticle/store/actionTypes';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

export const createArticleStartAction = createAction(
  ActionTypes.CREATE_ARTICLE_START,
  props<{ article: ArticleInputInterface }>()
);

export const createArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);
export const createArticleFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{ errors: string[] }>()
);


