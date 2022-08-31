import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { CreateArticleStateInterface } from "src/app/createArticle/types/createArticleState.interface";

const createArticleFeatureSelector =
  createFeatureSelector<AppStateInterface, CreateArticleStateInterface>('createArticle');

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) => createArticleState.isSubmitting
);

export const errorsSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) => createArticleState.errors
);

