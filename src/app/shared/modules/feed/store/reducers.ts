import { createReducer, on, Action } from "@ngrx/store";
import { routerNavigationAction } from "@ngrx/router-store";

import { FeedStateInterface } from "src/app/shared/modules/feed/types/feedState.interface";
import * as fetchFeedActions from 'src/app/shared/modules/feed/store/actions/fetchFeed.actions';

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null
}

const feedReducer = createReducer(
  initialState,

  on(
    fetchFeedActions.fetchFeedStartAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true
    })
  ),

  on(
    fetchFeedActions.fetchFeedSuccessAction,
    (state, { feed }): FeedStateInterface => ({
      ...state,
      data: feed,
      isLoading: false,
      error: null
    })
  ),

  on(
    fetchFeedActions.fetchFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false,
      error: 'error!!!'
    })
  ),

  on(
    routerNavigationAction,
    (): FeedStateInterface => initialState
  )
);

export function reducers(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action)
}

