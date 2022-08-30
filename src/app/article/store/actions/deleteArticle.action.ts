import { createAction, props } from "@ngrx/store";

import { ActionTypes } from 'src/app/article/store/actionTypes';

export const deleteArticleStartAction = createAction(
  ActionTypes.DELETE_ARTICLE_START,
  props<{ slug: string }>()
);

export const deleteArticleSuccessAction = createAction(
  ActionTypes.DELETE_ARTICLE_SUCCESS
);

export const deleteArticleFailureAction = createAction(
  ActionTypes.DELETE_ARTICLE_FAILURE
);
