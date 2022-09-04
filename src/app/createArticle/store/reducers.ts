import { createReducer, on } from "@ngrx/store";
import { Action } from "@ngrx/store";

import * as createArticleActions from 'src/app/createArticle/store/actions/createArticle.action';
import { CreateArticleStateInterface } from 'src/app/createArticle/types/createArticleState.interface';

const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  errors: null
}

const createArticleReducer = createReducer(
  initialState,

  on(
    createArticleActions.createArticleStartAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),

  on(
    createArticleActions.createArticleSuccessAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      errors: null
    })
  ),

  on(
    createArticleActions.createArticleFailureAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      errors: ['some error occured!'],
      isSubmitting: false
    })
  ),
);

export function reducers(state: CreateArticleStateInterface, action: Action) {
  return createArticleReducer(state, action)
}
