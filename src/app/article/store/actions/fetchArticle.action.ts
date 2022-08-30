import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'src/app/article/store/actionTypes';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

export const fetchArticleStartAction = createAction(
  ActionTypes.FETCH_ARTICLE_START,
  props<{ slug: string }>()
);

export const fetchArticleSuccessAction = createAction(
  ActionTypes.FETCH_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const fetchArticleFailureAction = createAction(
  ActionTypes.FETCH_ARTICLE_FAILURE
);
