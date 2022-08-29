import { createFeatureSelector, createSelector } from "@ngrx/store";

import { FeedStateInterface } from "src/app/shared/modules/feed/types/feedState.interface";
import { AppStateInterface } from "src/app/shared/types/appState.interface";

export const feedFeautureSelector =
  createFeatureSelector<AppStateInterface, FeedStateInterface>('feed');

export const feedSelector = createSelector(
  feedFeautureSelector,
  (feedState: FeedStateInterface) => feedState.data
);

export const isLoadingSelector = createSelector(
  feedFeautureSelector,
  (feedState: FeedStateInterface) => feedState.isLoading
);

export const errorSelector = createSelector(
  feedFeautureSelector,
  (feedState: FeedStateInterface) => feedState.error
);
