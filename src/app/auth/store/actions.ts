import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "src/app/auth/store/actionTypes";
import { RegisterRequestInterface } from "src/app/auth/types/registerRequest.interface";

export const registerStartAction = createAction(
  ActionTypes.REGISTER_START,
  props<{ request: RegisterRequestInterface }>()
);


