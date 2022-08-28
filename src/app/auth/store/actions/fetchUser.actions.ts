import { createAction, props } from '@ngrx/store';

import { ActionTypes } from "src/app/auth/store/actionTypes";
import { UserInterface } from "src/app/shared/types/user.interface";

export const fetchUserStartAction = createAction(
  ActionTypes.FETCH_USER_START
);

export const fetchUserSuccessAction = createAction(
  ActionTypes.FETCH_USER_SUCCESS,
  props<{ user: UserInterface }>()
);

export const fetchUserFailureAction = createAction(
  ActionTypes.FETCH_USER_FAILURE
);

