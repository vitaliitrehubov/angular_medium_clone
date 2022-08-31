import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { EditArticleStateInterface } from "../types/editArticleState.interface";

const updateArticleFeatureSelector =
  createFeatureSelector<AppStateInterface, EditArticleStateInterface>('editArticle');

export const articleSelector = createSelector(
  updateArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.article
);

export const isLoadingSelector = createSelector(
  updateArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.isLoading
);

export const isSubmittingSelector = createSelector(
  updateArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.isSubmitting
);

export const errorsSelector = createSelector(
  updateArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.errors
);

