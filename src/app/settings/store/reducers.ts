import { Action, createReducer, on } from '@ngrx/store';

import { SettingsStateInterface } from "src/app/settings/types/settingsState.interface";
import * as updateUserActions from 'src/app/auth/store/actions/updateUser.actions';

const initialState: SettingsStateInterface = {
  isSubmitting: false,
  errors: null
}

const settingsReducer = createReducer(
  initialState,

  on(
    updateUserActions.updateUserStartAction,
    (state): SettingsStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),

  on(
    updateUserActions.updateUserStartAction,
    (state): SettingsStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),

  on(
    updateUserActions.updateUserStartAction,
    (state): SettingsStateInterface => ({
      ...state,
      isSubmitting: false,
      errors: ['error occured...']
    })
  ),
);

export function reducers(state: SettingsStateInterface, action: Action) {
  return settingsReducer(state, action);
}
