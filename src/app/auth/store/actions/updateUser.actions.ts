import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "src/app/auth/store/actionTypes";
import { UserInterface } from "src/app/shared/types/user.interface";
import { UserInputInterface } from "src/app/shared/types/userInput.interface";

export const updateUserStartAction = createAction(
  ActionTypes.UPDATE_USER_START,
  props<{ userInput: UserInputInterface}>()
);

export const updateUserSuccessAction = createAction(
  ActionTypes.UPDATE_USER_SUCCESS,
  props<{ user: UserInterface}>()
);
export const updateUserFailureAction = createAction(
  ActionTypes.UPDATE_USER_FAILURE
);

