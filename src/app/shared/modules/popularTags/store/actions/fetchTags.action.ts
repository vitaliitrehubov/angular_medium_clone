import { createAction, props } from "@ngrx/store";

import { ActionTypes } from 'src/app/shared/modules/popularTags/store/actionTypes';

export const fetchTagsStartAction = createAction(
  ActionTypes.FETCH_TAGS_START
);

export const fetchTagsSuccessAction = createAction(
  ActionTypes.FETCH_TAGS_SUCCESS,
  props<{ tags: string[] }>()
);

export const fetchTagsFailureAction = createAction(
  ActionTypes.FETCH_TAGS_FAILURE
);
