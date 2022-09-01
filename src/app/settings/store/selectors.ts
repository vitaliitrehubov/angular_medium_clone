import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { SettingsStateInterface } from "src/app/settings/types/settingsState.interface";

const settingsFeatureSelector =
  createFeatureSelector<AppStateInterface, SettingsStateInterface>('settings');

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.isSubmitting
);

export const errorsSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.errors
);
