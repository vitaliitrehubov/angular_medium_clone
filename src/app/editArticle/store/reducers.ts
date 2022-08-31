import { Action, createReducer, on } from "@ngrx/store";

import * as fetchArticleActions from 'src/app/editArticle/store/actions/fetchArticle.action';
import * as updateArticleActions from 'src/app/editArticle/store/actions/updateArticle.action';
import { EditArticleStateInterface } from "../types/editArticleState.interface";

const initialState: EditArticleStateInterface = {
  article: null,
  isLoading: false,
  isSubmitting: false,
  errors: null
}

const editArticleReducer = createReducer(
  initialState,

  on(
    updateArticleActions.updateArticleStartAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),

  on(
    updateArticleActions.updateArticleSuccessAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),

  on(
    updateArticleActions.updateArticleFailureAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      errors: ['error']
    })
  ),

  on(
    fetchArticleActions.fetchArticleStartAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isLoading: true
    })
  ),

  on(
    fetchArticleActions.fetchArticleSuccessAction,
    (state, { article }): EditArticleStateInterface => ({
      ...state,
      article,
      isLoading: false
    })
  ),

  on(
    fetchArticleActions.fetchArticleFailureAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isLoading: false,
      errors: ['an error occured!']
    })
  ),
);

export function reducers(state: EditArticleStateInterface, action: Action) {
  return editArticleReducer(state, action);
}
