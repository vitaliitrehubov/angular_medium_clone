import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "src/app/shared/modules/addToFavorites/store/actionTypes";
import { ArticleInterface } from "src/app/shared/types/article.interface";

export const addToFavoritesStartAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_START,
  props<{ slug: string, isFavorited: boolean }>()
);

export const addToFavoritesSuccessAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_SUССESS,
  props<{ article: ArticleInterface }>()
);
export const addToFavoritesFailureAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_FAILURE
);
