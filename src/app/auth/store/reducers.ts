import { Action, createReducer, on } from '@ngrx/store';

import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { logoutAction } from 'src/app/auth/store/actions/sync.action';
import * as registerActions from 'src/app/auth/store/actions/register.actions';
import * as loginActions from 'src/app/auth/store/actions/login.actions';
import * as fetchUserActions from 'src/app/auth/store/actions/fetchUser.actions';
import * as updateUserActions from 'src/app/auth/store/actions/updateUser.actions';

const initialState: AuthStateInterface = {
  isLoading: false,
  isSubmitting: false,
  errors: null,
  isLoggedIn: null,
  user: null
}

const authReducer = createReducer(
  initialState,

  on(
    fetchUserActions.fetchUserStartAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true
    })
  ),

  on(
    fetchUserActions.fetchUserSuccessAction,
    (state, { user }): AuthStateInterface => ({
      ...state,
      user,
      isLoading: false,
      isLoggedIn: true
    })
  ),

  on(
    fetchUserActions.fetchUserFailureAction,
    (state): AuthStateInterface => ({
      ...state,
      user: null,
      isLoading: false,
      isLoggedIn: false
    })
  ),

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
  ),

  on(
    updateUserActions.updateUserStartAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true,
      isSubmitting: false
    })
  ),

  on(
    updateUserActions.updateUserSuccessAction,
    (state, { user }): AuthStateInterface => ({
      ...state,
      user,
      isLoading: false,
      isSubmitting: false
    })
  ),

  on(
    updateUserActions.updateUserFailureAction,
    (state): AuthStateInterface => ({
      ...state,
      errors: ['error!'],
      isLoading: false,
      isSubmitting: false
    })
  ),

  on(
    logoutAction,
    () => initialState
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}

