import { createReducer, on } from "@ngrx/store";
import { Action } from "@ngrx/store";

import { PopularTagsStateInterface } from 'src/app/shared/modules/popularTags/types/popularTagsState.interface';
import * as fetchTagsActions from 'src/app/shared/modules/popularTags/store/actions/fetchTags.action';

const initialState: PopularTagsStateInterface = {
  data: null,
  error: null,
  isLoading: false
}

const tagsReducer = createReducer(
  initialState,

  on(
    fetchTagsActions.fetchTagsStartAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true,
      error: null
    })
  ),

  on(
    fetchTagsActions.fetchTagsSuccessAction,
    (state, { tags }): PopularTagsStateInterface => ({
      ...state,
      data: tags,
      isLoading: false,
      error: null
    })

  ),

  on(
    fetchTagsActions.fetchTagsFailureAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      error: 'error occured!'
    })
  )
);

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return tagsReducer(state, action)
}

