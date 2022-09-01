import { createAction, props } from "@ngrx/store";

import { ActionTypes } from 'src/app/userProfile/store/actionTypes';
import { UserProfileInterface } from "src/app/userProfile/types/userProfile.interface";

export const fetchUserProfileStartAction = createAction(
  ActionTypes.FETCH_USER_PROFILE_START,
  props<{ slug: string }>()
);

export const fetchUserProfileSuccessAction = createAction(
  ActionTypes.FETCH_USER_PROFILE_SUCCESS,
  props<{ profile: UserProfileInterface }>()
);

export const fetchUserProfileFailureAction = createAction(
  ActionTypes.FETCH_USER_PROFILE_FAILURE
);

