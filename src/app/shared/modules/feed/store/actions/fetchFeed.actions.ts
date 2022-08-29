import { createAction, props } from "@ngrx/store";

import { ActionTypes } from 'src/app/shared/modules/feed/store/actionTypes';
import { FetchFeedResponseInterface } from 'src/app/shared/modules/feed/types/fetchFeedResponse.interface';

export const fetchFeedStartAction = createAction(
  ActionTypes.FETCH_FEED_START,
  props<{ url: string }>()
);

export const fetchFeedSuccessAction = createAction(
  ActionTypes.FETCH_FEED_SUCCESS,
  props<{ feed: FetchFeedResponseInterface }>()
);

export const fetchFeedFailureAction = createAction(
  ActionTypes.FETCH_FEED_FAILURE
);

