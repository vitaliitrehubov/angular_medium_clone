import { Action, createReducer, on } from "@ngrx/store";

import { AuthStateInterface } from "src/app/auth/types/authState.interface";
import * as registerActions from 'src/app/auth/store/actions/registerActions';

const initialState: AuthStateInterface = {
  isSubmitting: false,
}

const authReducer = createReducer(
  initialState,

  on(
    registerActions.registerStartAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),


);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
