import { Action, createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';

import { UserProfileStateInterface } from 'src/app/userProfile/types/userProfileState.interface';
import * as fetchUserProfileActions from 'src/app/userProfile/store/actions/fetchUserProfile.action';

const initialState: UserProfileStateInterface = {
  data: null,
  isLoading: false,
  errors: null
}

const userProfileReducer = createReducer(
  initialState,

  on(
    fetchUserProfileActions.fetchUserProfileStartAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: true
    })
  ),

  on(
    fetchUserProfileActions.fetchUserProfileSuccessAction,
    (state, { profile }): UserProfileStateInterface => ({
      ...state,
      isLoading: false,
      data: profile
    })
  ),

  on(
    fetchUserProfileActions.fetchUserProfileFailureAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: false
    })
  ),

  on(
    routerNavigationAction,
    (): UserProfileStateInterface => initialState
  )
)

export function reducers(state: UserProfileStateInterface, action: Action) {
  return userProfileReducer(state, action)
}
