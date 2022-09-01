import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { UserProfileStateInterface } from "src/app/userProfile/types/userProfileState.interface";

const userProfileFeatureSelector =
  createFeatureSelector<AppStateInterface, UserProfileStateInterface>('userProfile');

export const userSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: UserProfileStateInterface) => userProfileState.data
);

export const errorsSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: UserProfileStateInterface) => userProfileState.errors
);

export const isLoadingSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: UserProfileStateInterface) => userProfileState.isLoading
);

