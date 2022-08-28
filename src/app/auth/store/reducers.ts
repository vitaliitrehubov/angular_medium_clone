import { Action, createReducer, on } from '@ngrx/store';

import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import * as registerActions from 'src/app/auth/store/actions/registerActions';
import * as loginActions from 'src/app/auth/store/actions/login.actions';


const initialState: AuthStateInterface = {
  isSubmitting: false,
  errors: null,
  isLoggedIn: null,
  user: null
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

  on(
    registerActions.registerSuccessAction,
    (state, { user }): AuthStateInterface => ({
      ...state,
      user,
      isSubmitting: false,
      isLoggedIn: true,
      errors: null
    })
  ),

  on(
    registerActions.registerFailureAction,
    (state, { errors }): AuthStateInterface => ({
      ...state,
      errors,
      isSubmitting: false
    })
  ),

  on(
    loginActions.loginStartAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      errors: null
    })
  ),

  on(
    loginActions.loginSuccessAction,
    (state, { user }): AuthStateInterface => ({
      ...state,
      user,
      isLoggedIn: true,
      isSubmitting: false,
      errors: null
    })
  ),

  on(
    loginActions.loginFailureAction,
    (state, { errors }): AuthStateInterface => ({
      ...state,
      errors,
      isSubmitting: false
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}

