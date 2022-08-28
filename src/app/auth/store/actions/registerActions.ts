import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "src/app/auth/store/actionTypes";
import { RegisterRequestInterface } from "src/app/auth/types/registerRequest.interface";
import { UserInterface } from "src/app/shared/types/user.interface";

export const registerStartAction = createAction(
  ActionTypes.REGISTER_START,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ user: UserInterface }>()
);

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: string[] }>()
);

