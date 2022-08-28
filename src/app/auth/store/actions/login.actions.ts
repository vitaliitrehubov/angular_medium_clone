import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "src/app/auth/store/actionTypes";
import { UserInterface } from "src/app/shared/types/user.interface";
import { LoginRequestInterface } from 'src/app/auth/types/loginRequest.interface';

export const loginStartAction = createAction(
  ActionTypes.LOGIN_START,
  props<{ request: LoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ user: UserInterface }>()
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: string[] }>()
);

