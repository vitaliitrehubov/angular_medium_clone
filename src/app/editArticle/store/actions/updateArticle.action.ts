import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "src/app/editArticle/store/actionTypes";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";

export const updateArticleStartAction = createAction(
  ActionTypes.UPDATE_ARTICLE_START,
  props<{ slug: string; articleInput: ArticleInputInterface }>()
);

export const updateArticleSuccessAction = createAction(
  ActionTypes.UPDATE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const updateArticleFailureAction = createAction(
  ActionTypes.UPDATE_ARTICLE_FAILURE
);

