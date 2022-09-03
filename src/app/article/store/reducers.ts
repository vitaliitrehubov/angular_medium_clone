import { Action, createReducer, on } from '@ngrx/store';
import { routerNavigationAction, routerNavigatedAction } from '@ngrx/router-store';

import { ArticleStateInterface } from 'src/app/article/types/articleState.interface';
import * as fetchArticleActions from 'src/app/article/store/actions/fetchArticle.action';

const initialState: ArticleStateInterface = {
  data: null,
  isLoading: false,
  error: null
};

const articleReducer = createReducer(
  initialState,

  on(
    fetchArticleActions.fetchArticleStartAction,
    (state): ArticleStateInterface => ({
      ...state,
      data: null,
      isLoading: true,
      error: null
    })
  ),

  on(
    fetchArticleActions.fetchArticleSuccessAction,
    (state, { article }): ArticleStateInterface => ({
      ...state,
      data: article,
      isLoading: false,
      error: null
    })
  ),

  on(
    fetchArticleActions.fetchArticleFailureAction,
    (state): ArticleStateInterface => ({
      ...state,
      data: null,
      isLoading: false,
      error: 'an error occured!'
    })
  ),

  on(
    routerNavigatedAction,
    (): ArticleStateInterface => initialState
  ),
  on(
    routerNavigationAction,
    (): ArticleStateInterface => initialState
  ),
);

export function reducers(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action)
}
