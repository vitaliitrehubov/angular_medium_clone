import { createFeatureSelector, createSelector } from "@ngrx/store";

import { PopularTagsStateInterface } from 'src/app/shared/modules/popularTags/types/popularTagsState.interface';
import { AppStateInterface } from "src/app/shared/types/appState.interface";

const popularTagsFeatureSelector =
  createFeatureSelector<AppStateInterface, PopularTagsStateInterface>('tags');

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (tagsState: PopularTagsStateInterface) => tagsState.data
);

export const isLoadingTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (tagsState: PopularTagsStateInterface) => tagsState.isLoading
);

export const errorTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (tagsState: PopularTagsStateInterface) => tagsState.error
);

